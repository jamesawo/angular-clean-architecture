describe('BookmarkRepository', () => {

    describe('baseUrl', () => {
        it('should not be empty', () => { });
        it(`should contain 'bookmarks'`, () => { });
    });

    describe('all', () => {
        it('should NOT accept any input', () => { });
        it('should call get method on httpClient', () => { });
        it('should pass an input of string to get method on httpClient', () => { })
        it('should return an Observable of BookmarkEntity[]', () => { });
    });

    describe('createBookmark', () => {
        it(`should accept a input of type 'BookEntity'`, () => { });
        it('should call a post method on httpClient', () => { });
        it('should return an Observable of Result as response', () => { });
        it('should pass url and bookmark as input to httpClient post method');
    });

    describe('getBookmark', () => {
        it(`should accept an input of type string`, () => { });
        it('should return an Observable of BookmarkEntity', () => { });
        it('should call get method on httpClient ', () => { });
        it('should pass an input to httpClient get method containing its own input', () => { });

    });

    describe('updateBookmark', () => {
        it('should accept inputs of id:string and boomark:BookmarkEntity', () => { });
        it('should return an Observable of Result', () => { });
        it('should call put method on httpClient', () => { });
        it('should pass input to put method of httpClient containing id, bookmark', () => { });

    });

    describe('removeBookmark', () => {
        it('should accept input of type string', () => { });
        it('should call delete method on httpClient', () => { });
        it('should pass input containing id to delete method on httpClient', () => { });

    });

});
