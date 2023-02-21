import { Component, Input } from '@angular/core';

export type TableData<T> = {
    id: string,
    title: string,
    date?: string,
    obj?: T
}

type TableAction<T> = {
    onRemove: (id: string) => void;
    onEdit: (id: string, data?: T) => void;
};

export type Table<T> = {

    cols?: { title: string }[],
    data: TableData<T>[],
    action?: TableAction<T>
}

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
