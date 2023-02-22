import { ProjectFormComponent, ProjectFormProps } from './../../components/project-form/project-form.component';
import { ProjectInteractor } from './../../../../../data/interactors/implementations/project.interactor';
import { ProjectRequest } from 'src/app/data/requests/project.request';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { Table } from 'src/app/presenter/components/shared/table/table.component';
import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';
import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { isFormInvalid, onHttpResponse, updateTags } from '../../editor.functions';


@Component({
    selector: 'app-editor-projects',
    templateUrl: './editor-projects.component.html',
    styles: [
    ]
})
export class EditorProjectsComponent implements OnInit {

    public tableData: Table<ProjectRequest> = { cols: [{ title: 'Project Title' }] };
    public form: FormGroup = new FormGroup({});
    public isLoading = false;

    public constructor(
        private projectInteractor: ProjectInteractor,
        private modalService: ModalService<ProjectFormComponent, ProjectFormProps>,
        private toastService: ToastService
    ) { }

    ngOnInit(): void {
        this.setTableData();
    }

    public setTableData = () => {
        this.tableData.action = { onEdit: this.onEditPost, onRemove: this.onRemovePost }
        this.tableData.data$ = this.projectInteractor.getMany();
    }

    public openModal = async (): Promise<void> => {
        await this.modalService.open(
            { component: ProjectFormComponent, modalTitle: 'Create Project' },
            { inputTitle: 'defaultValue', inputValue: this.getModalProps(new ProjectRequest()) }
        );
    }

    private onEditPost = async (id: string, post?: ProjectRequest): Promise<void> => {
        await this.modalService.open(
            { component: ProjectFormComponent, modalTitle: 'Update Project' },
            { inputTitle: 'defaultValue', inputValue: this.getModalProps(post!) }
        );
    }

    private onRemovePost = (id: string): void => {
        const result: boolean = confirm('Are you sure?');
        if (id && result) {
            const response = firstValueFrom(this.projectInteractor.delete(id));
            onHttpResponse(response, this.toastService);
            this.onRefreshComponent();
        }
    }

    private onSavePost = async () => {
        if (isFormInvalid(this.form)) return;

        this.isLoading = true;
        const formValues: ProjectRequest = { ...this.form.value, tags: updateTags(this.form) };
        const response = firstValueFrom(this.projectInteractor.create(formValues));
        await onHttpResponse(response, this.toastService);
        this.modalService.close();
        this.onRefreshComponent();
    }

    private setForm = (project?: ProjectRequest) => {
        this.isLoading = false;
        this.form = new FormGroup({
            _id: new FormControl(project?._id),
            title: new FormControl(project?.title, [Validators.required]),
            description: new FormControl(project?.description, [Validators.required]),
            features: new FormControl(project?.features?.toString(), []),
            modules: new FormControl(project?.modules?.toString(), []),
            industries: new FormControl(project?.industries?.toString(), []),
            tools: new FormControl(project?.tools?.toString(), []),
            imageUrl: new FormControl(project?.imageUrl, []),
            actionTitle: new FormControl(project?.action?.title, [Validators.required]),
            actionLink: new FormControl(project?.action?.link, [Validators.required]),

        })

    }

    private getModalProps = (post: ProjectRequest): ProjectFormProps => {
        this.setForm(post);
        return { form: this.form, action: this.onSavePost, data: post, isLoading: this.isLoading };
    }

    private onRefreshComponent = () => {
        setTimeout(() => this.ngOnInit()), 2000;
    }
}
