import { TestBed } from '@angular/core/testing';

import { AppModule } from './app.module';

describe('AppModule', () => {
    TestBed.configureTestingModule({
        imports: [AppModule]
    })

    it('should initialize', () => {
        debugger;
        const module = TestBed.inject(AppModule);

        expect(module).toBeTruthy();
    })
});
