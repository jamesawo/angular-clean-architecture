import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styles: [
    ]
})
export class TableComponent implements OnInit {

    @Input()
    payload?: Table<any>;

    ngOnInit() {
    }

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
    data$?: Observable<T[]>,
    action?: TableAction<T>
}
