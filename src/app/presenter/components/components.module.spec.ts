import { TestBed } from '@angular/core/testing';

import { ComponentModule } from './components.module';
describe('ComponentModule', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ComponentModule]
        })
    })

    it('should initialize', () => {
        const module = TestBed.inject(ComponentModule);

        expect(module).toBeTruthy();
    })
})
