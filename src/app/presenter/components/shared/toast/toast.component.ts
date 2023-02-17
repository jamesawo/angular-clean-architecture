import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Toast, ToastService, ToastType } from './toast.service';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.component.html',
    animations: [
        trigger(
            'inOutAnimation',
            [
                transition(
                    ':enter',
                    [
                        style({ left: 0, opacity: 0 }),
                        animate('1s ease-out',
                            style({ left: 20, opacity: 1 }))
                    ]
                ),
                transition(
                    ':leave',
                    [
                        style({ left: 20, opacity: 1 }),
                        animate('1s ease-in',
                            style({ left: 0, opacity: 0 }))
                    ]
                )
            ]
        )
    ]
})
export class ToastComponent implements OnInit {

    public toastProps?: Observable<Toast>

    public constructor(private toastService: ToastService) { }

    ngOnInit(): void {
        this.toastProps = this.toastService.listen$;
    }

    public color(toastType: ToastType): string {
        switch (toastType) {
            case ToastType.info:
                return `bg-blue-500`;
            case ToastType.warning:
                return `bg-yellow-500`;
            case ToastType.success:
                return `bg-green-500`;
            case ToastType.error:
                return `bg-red-500`;
            default:
                return `bg-green-500`;
        }
    }

    public close() {
        this.toastService.close();
    }

}
