const googleSearch = require('./script')

dbMock = [
    'testdb1.com',
    'testdb2.com'
];

describe('googleSearch', () => {

    it('googleSearch not matching', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([]); 
    });

    it('googleSearch onematching', () => {
        expect(googleSearch('db1', dbMock)).toEqual([ 'testdb1.com' ]); 
    });

}
);