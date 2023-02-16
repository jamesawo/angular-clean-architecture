import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    public title = 'angular-clean-architecture-serverless';
    public isDarkTheme?: boolean;

    private sub: Subscription = new Subscription();


}
