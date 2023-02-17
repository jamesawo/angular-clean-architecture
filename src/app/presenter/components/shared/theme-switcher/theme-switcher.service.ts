import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ThemeSwitcherService {
    public pref$: Observable<string>;
    private pref: BehaviorSubject<string>;
    private prefKey = 'THEME_PREF';

    constructor() {
        this.pref = new BehaviorSubject(this.getThemePref());
        this.pref$ = this.pref.asObservable();
    }

    public updateThemePref(value: 'dark' | 'light'): void {
        if (value) {
            localStorage.setItem(this.prefKey, value);
            this.pref.next(value);
        }
    }

    public getThemePref(): string {
        const localPref = localStorage.getItem(this.prefKey);
        return localPref || this.pref?.value;
    }

}
