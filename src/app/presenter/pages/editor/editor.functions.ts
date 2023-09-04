import { FormGroup } from '@angular/forms';

import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { ProjectRequest } from 'src/app/data/requests/project.request';
import { PostRequest } from 'src/app/data/requests/posts.request';
import { BookmarkRequest } from 'src/app/data/requests/bookmark.request';

import { from, map, Observable } from 'rxjs';

import { Result } from './../../../core/types/types';
import {
    ToastService,
    ToastType,
} from './../../components/shared/toast/toast.service';

type RequestArrUn = ProjectRequest[] | BookmarkRequest[] | PostRequest[];
type RequestPayloadUn = ProjectRequest | BookmarkRequest | PostRequest;

const isInvalidControl = (controlName: string, form: FormGroup): boolean => {
    const control = form?.controls[controlName];
    return control?.touched == true && control?.status === 'INVALID';
};

const parseDate = (value?: string) => {
    if (!value) return new Date().toISOString().slice(0, 10);

    const parse = Date.parse(value);
    return new Date(parse).toISOString().slice(0, 10);
};

const updateTags = (form: FormGroup) => {
    const { tags } = form.value;
    return tags?.split(',') ?? [];
};

const splitText = (form: FormGroup, text: string) => {
    const textBeforeSplit = form.get(text)?.value;
    return textBeforeSplit?.split(',') ?? [];
};

const getActionLink = (form: FormGroup) => {
    return {
        link: form.get('actionLink')?.value ?? '',
        title: form.get('actionTitle')?.value ?? '',
    };
};

const joinShorts = (form: FormGroup) => {
    const { short } = form.value;
    if (short) {
        return short?.split(' ').join('-');
    }
    return '';
};

const isFormInvalid = (form: FormGroup) => {
    if (form.invalid) {
        form.markAllAsTouched();
        return true;
    }
    return false;
};

const onHttpResponse = async (
    response: Promise<Result>,
    toast: ToastService,
    modal?: ModalService<any, any>
): Promise<Result> => {
    const value = await response;
    try {
        if (value && value.acknowledged) {
            showToast(
                toast,
                ToastType.success,
                'Success',
                'Action Successfully'
            );
            modal?.close();
        } else {
            showToast(toast, ToastType.error, 'Failed', 'Opps Action Failed');
        }
    } catch (error: any) {
        const { message } = error;
        showToast(
            toast,
            ToastType.error,
            'Failed',
            message ?? 'Opps Action Failed'
        );
    } finally {
        return value;
    }
};

const showToast = (
    toast: ToastService,
    type: ToastType,
    title: string,
    message: string
) => {
    toast.show({ title, message, type });
};

const removeItemFromListIfStatus = (
    status: boolean,
    id: string,
    list?: RequestArrUn
): void => {
    if (status && list && list.length) {
        const index = list.findIndex((bookmark) => bookmark._id === id);
        list.splice(index, 1);
    }
};

const appendToObservableListIfStatus = (
    source: Observable<any>,
    item: RequestPayloadUn,
    result: Result
): Observable<any> => {
    if (result.acknowledged === true) {
        return from(
            source!.pipe(
                map((list) => [{ ...item, _id: result.insertedId }, ...list])
            )
        );
    }
    return source;
};

export {
    isInvalidControl,
    parseDate,
    updateTags,
    isFormInvalid,
    onHttpResponse,
    showToast,
    joinShorts,
    splitText,
    getActionLink,
    removeItemFromListIfStatus,
    appendToObservableListIfStatus,
};
