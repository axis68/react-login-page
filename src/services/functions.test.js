const getFunctions = require('./functions');

it('Test supported functions', () => {
    expect(getFunctions().length).toEqual(4);
});