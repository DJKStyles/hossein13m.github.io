import { Component, Input } from '@angular/core';
import { NavigationRouteModel } from '../../models/navigationRoute.model';

@Component({
    selector: 'app-page-header',
    template: `
        <header class="flex items-center mb-5 p-5 dark:bg-custom-yellow-500 bg-custom-blue-600 dark:text-custom-purple-900 text-yellow-500">
            <mat-icon class="mx-5 flex items-center text-4xl">{{ pageHeaderInfo.routeIcon }}</mat-icon>
            <h1 class="m-0 text-4xl">{{ pageHeaderInfo.routeTitle }}</h1>
        </header>
    `,
})
export class PageHeaderComponent {
    public backgroundImagePath: string = 'space11.png';
    public publicationSubject: Array<string> = ['JavaScript.', 'TypeScript.', 'Angular.', 'Git.', 'Project Management.', 'Node.JS.'];
    @Input() pageHeaderInfo!: NavigationRouteModel;

    constructor() {}
}
