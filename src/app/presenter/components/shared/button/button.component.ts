import { Component, Input } from '@angular/core';

export type ButtonProps = {
    text?: string,
    type?: string,
    loading?: boolean,
}


@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styles: [
    ]
})
export class ButtonComponent {

    @Input()
    props: ButtonProps = { type: 'button', loading: false };

    @Input()
    action: () => void = () => { }

}
