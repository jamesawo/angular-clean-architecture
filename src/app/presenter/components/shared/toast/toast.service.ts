import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

export enum ToastType {
    warning,
    success,
    info,
    error
}

export type Toast = {
    isOpen: boolean,
    type?: ToastType,
    title?: string,
    message?: string,
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    public listen$: Observable<Toast>;

    private listen: BehaviorSubject<Toast>
    private options = { autoClose: true, location: 'top-right' };

    constructor() {
        this.listen = new BehaviorSubject<Toast>({ type: ToastType.info, isOpen: false });
        this.listen$ = this.listen.asObservable();
    }

    public show(args: { title: string, message?: string, type?: ToastType }): void {
        this.listen.next({
            isOpen: true,
            title: args.title,
            type: args.type ?? ToastType.info,
            message: args.message ?? ''
        });
        setTimeout(() => this.close(), 5000)
    }

    public close(): void {
        this.listen.next({ isOpen: false })
    }

}
