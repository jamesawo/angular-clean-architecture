
describe('ProjectRepository', () => {

    describe('baseUrl', () => {
        it('should not be empty', () => { });
        it(`should contain 'projects'`, () => { });
    });

    describe('all', () => {
        it('should NOT accept any input', () => { });
        it('should call get method on httpClient', () => { });
        it('should pass an input of string to get method on httpClient', () => { })
        it('should return an Observable of ProjectEntity[]', () => { });
    });

    describe('createProject', () => {
        it(`should accept a input of type 'ProjectEntity'`, () => { });
        it('should call a post method on httpClient', () => { });
        it('should return an Observable of Result as response', () => { });
        it('should pass url and post as input to httpClient post method');
    });

    describe('getProject', () => {
        it(`should accept an input of type string`, () => { });
        it('should return an Observable of ProjectEntity', () => { });
        it('should call get method on httpClient ', () => { });
        it('should pass an input to httpClient get method', () => { });

    });

    describe('updateProject', () => {
        it('should accept 2 inputs of type string and ProjectEntity', () => { });
        it('should return an Observable of Result', () => { });
        it('should call put method on httpClient', () => { });
        it('should pass inputs to put method of httpClient', () => { });

    });

    describe('removeProject', () => {
        it('should accept input of type string', () => { });
        it('should call delete method on httpClient', () => { });
        it('should pass input containing id to delete method on httpClient', () => { });
        it('should return an Observable of Result', () => { });
    });

});
