import { RouterModule } from '@angular/router';
import { ToastComponent } from './toast/toast.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NgModule } from '@angular/core';
import { ToggleSwitchComponent } from './toggle-switch/toggle-switch.component';


@NgModule({
    declarations: [
        FooterComponent,
        NotFoundComponent,
        ToastComponent,
        ToggleSwitchComponent,
        HeaderComponent,
    ],
    exports: [
        FooterComponent,
        ToggleSwitchComponent,
        NotFoundComponent,
        ToastComponent,
        HeaderComponent,
    ],
    imports: [
        RouterModule
    ]
})
export class ComponentModule { }
