import { TestBed } from '@angular/core/testing';

import { AppModule } from './app.module';

describe('AppModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule],
        });
    });

    it('should initialize', () => {
        const module = TestBed.inject(AppModule);

        expect(module).toBeTruthy();
    });
});
