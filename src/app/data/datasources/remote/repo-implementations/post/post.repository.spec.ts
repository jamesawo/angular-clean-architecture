
describe(('PostRepository'), () => {

    describe('baseUrl', () => {
        it('should not be empty', () => { });
        it(`should contain 'posts'`, () => { });
    });

    describe('all', () => {
        it('should NOT accept any input', () => { });
        it('should call get method on httpClient', () => { });
        it('should pass an input of string to get method on httpClient', () => { })
        it('should return an Observable of BookmarkEntity[]', () => { });
    });

    describe('createPost', () => {
        it(`should accept a input of type 'PostEntity'`, () => { });
        it('should call a post method on httpClient', () => { });
        it('should return an Observable of Result as response', () => { });
        it('should pass url and post as input to httpClient post method');
    });

    describe('getPost', () => {
        it(`should accept an input of type string`, () => { });
        it('should return an Observable of PostEntity', () => { });
        it('should call get method on httpClient ', () => { });
        it('should pass an input to httpClient get method', () => { });

    });

    describe('updatePost', () => {
        it('should accept inputs of id:string and post:PostEntity', () => { });
        it('should return an Observable of Result', () => { });
        it('should call put method on httpClient', () => { });
        it('should pass input to put method of httpClient containing id, post', () => { });

    });

    describe('removePost', () => {
        it('should accept input of type string', () => { });
        it('should call delete method on httpClient', () => { });
        it('should pass input containing id to delete method on httpClient', () => { });

    });


});
