export class Post {
    id?: string;
    tags?: string[];
    content!: string;
    date!: string;
    title!: string;
    created_at?: Date;
    author?: string;
    excerpt?: string;
    read?: number;
    views?: number;

}
