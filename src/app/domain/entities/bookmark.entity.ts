export class BookmarkEntity {

    id?: string;
    short!: string;
    url!: string;
    date?: string;
    tags?: string[];

    constructor(id?: string) {
        this.id = id;
    }
}
