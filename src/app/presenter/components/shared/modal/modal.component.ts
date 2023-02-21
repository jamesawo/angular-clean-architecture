import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styles: [
        `
			section {
			visibility: hidden;
			opacity: 0;
			transition: opacity 250ms ease-in;
		}
		section.open {
			visibility: inherit;
			opacity: 1;
		}
		`
    ]
})
export class ModalComponent<T> {
    public display = true;
    public title = '';

    public constructor(private service: ModalService<T>) {
        this.title = service.title!;
    }

    public close = async () => {
        this.display = false;
        setTimeout(async () => {
            await this.service.close()
        }, 1000)
    }
}
