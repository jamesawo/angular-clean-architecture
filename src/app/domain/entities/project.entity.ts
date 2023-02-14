export type ProjectAction = {
    title: string;
    link: string;
}

export class ProjectEntity {
    id?: string;
    title!: string;
    description!: string;
    features?: string[];
    modules?: string[];
    industries?: string[];
    tools?: string[];
    imageUrl?: string;
    action?: ProjectAction;
}
