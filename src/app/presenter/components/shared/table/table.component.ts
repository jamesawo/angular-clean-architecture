import { Observable } from 'rxjs';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styles: [
    ]
})
export class TableComponent {

    @Input()
    payload?: Table<any>;

}

export type TableData = {
    _id: string,
    title: string,
    date?: string,
}

type TableAction<T> = {
    onRemove: (id: string) => void;
    onEdit: (id: string, data?: T) => void;
};

export type Table<T> = {

    cols?: { title: string }[],
    data?: Observable<T[]>,
    action?: TableAction<T>
}
