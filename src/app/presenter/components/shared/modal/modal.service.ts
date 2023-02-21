import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from "@angular/core";

export type ComponentInput<U> = {
    inputTitle: string,
    inputValue: U
}

@Injectable({
    providedIn: 'root'
})
export class ModalService<T, U = void> {
    public title?: string;
    private componentRef?: ComponentRef<T>

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef, private injector: Injector
    ) { }

    public async close(): Promise<void> {
        if (!this.componentRef) return;

        this.appRef.detachView(this.componentRef.hostView);
        this.componentRef.destroy();
        this.componentRef = undefined;
    }

    public async open(
        param: { component: Type<T>, modalTitle?: string },
        input?: ComponentInput<U>
    ): Promise<void> {
        if (this.componentRef) return

        this.title = param.modalTitle;
        this.resolveComponent(param.component, input);
        this.appendComponentToHtmlBody();
    }

    private resolveComponent(component: Type<T>, input?: ComponentInput<U>): void {
        // use componentFactoryResolver to create component
        this.componentRef = this.componentFactoryResolver
            .resolveComponentFactory<T>(component).create(this.injector);
        this.appRef.attachView(this.componentRef.hostView);

        // set a default input value in the component before modal opens
        if (input) this.componentRef.setInput(input.inputTitle, input?.inputValue);
    }

    private appendComponentToHtmlBody(): void {
        const domElement = (this.componentRef?.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        document.body.appendChild(domElement);
    }

}
