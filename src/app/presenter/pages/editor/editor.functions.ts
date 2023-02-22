import { Component, Type } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Result } from './../../../core/types/types';
import { ToastService, ToastType } from './../../components/shared/toast/toast.service';

const isInvalidControl = (controlName: string, form: FormGroup): boolean => {
    const control = form?.controls[controlName];
    return control?.touched == true && control?.status === 'INVALID';
}

const parseDate = (value?: string) => {
    if (!value) return new Date().toISOString().slice(0, 10);

    const parse = Date.parse(value);
    return new Date(parse).toISOString().slice(0, 10);
}

const updateTags = (form: FormGroup) => {
    const { tags } = form.value;
    return tags?.split(',') ?? []
}

const isFormInvalid = (form: FormGroup) => {
    if (form.invalid) {
        form.markAllAsTouched();
        return true;
    }
    return false;
}

const onHttpResponse = async (response: Promise<Result>, toast: ToastService) => {
    try {
        const value = await response;
        if (value && value.acknowledged) {
            showToast(toast, ToastType.success, 'Success', 'Action Successfully')
        } else {
            showToast(toast, ToastType.error, 'Failed', 'Opps Action Failed');
        }
    } catch (error: any) {
        const { message } = error;
        showToast(toast, ToastType.error, 'Failed', message ?? 'Opps Action Failed');
    }

}

const showToast = (toast: ToastService, type: ToastType, title: string, message: string) => {
    toast.show({ title, message, type });
}


export {
    isInvalidControl,
    parseDate,
    updateTags,
    isFormInvalid,
    onHttpResponse,
    showToast,
}
