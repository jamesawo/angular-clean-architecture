import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tag',
    template: `
    <span class="h-max text-sm font-medium
        bg-gray-100 dark:bg-slate-400 py-1 px-2 rounded dark:text-white text-black align-middle
        hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500">
        {{text}}
    </span>
    `
})
export class TagComponent {
    @Input()
    public text: string = '';
}
