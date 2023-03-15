import { TestBed } from '@angular/core/testing';

import { PresenterModule } from './presenter.module';

describe('PresenterModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [PresenterModule]
        })
    })

    it('should initialize', () => {
        const module = TestBed.inject(PresenterModule);

        expect(module).toBeTruthy();
    })
})
