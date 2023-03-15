import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from 'src/app/presenter/components/shared/button/button.component';
import { TableComponent } from 'src/app/presenter/components/shared/table/table.component';
import { ModalService } from 'src/app/presenter/components/shared/modal/modal.service';
import { ToastService } from 'src/app/presenter/components/shared/toast/toast.service';

import { of } from 'rxjs';

import { PostInteractor } from './../../../../../data/interactors/implementations/post/post.interactor';

import { EditorPostsComponent } from './editor-posts.component';

describe('EditorPostsComponent', () => {
    let component: EditorPostsComponent;
    let fixture: ComponentFixture<EditorPostsComponent>;
    let postInteractor: jasmine.SpyObj<PostInteractor>;
    let modalService: jasmine.SpyObj<ModalService<any, any>>;
    let toastService: jasmine.SpyObj<ToastService>;

    beforeEach(async () => {
        postInteractor = jasmine.createSpyObj(PostInteractor, ['getMany']);
        postInteractor.getMany = jasmine.createSpy().and.returnValue(of());

        await TestBed.configureTestingModule({
            declarations: [
                EditorPostsComponent,
                ButtonComponent,
                TableComponent,
            ],
            providers: [
                { provide: PostInteractor, useValue: postInteractor },
                { provide: ModalService, useValue: modalService },
                { provide: ToastService, useValue: toastService },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(EditorPostsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
