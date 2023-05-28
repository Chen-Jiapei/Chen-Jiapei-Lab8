// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Phone numbers should be in the format of (XXX) XXX-XXXX or XXX-XXX-XXXX', () => {
    expect(functions.isPhoneNumber('812-345-6789')).toBe(true);
    expect(functions.isPhoneNumber('(812) 345-6789')).toBe(true);
    expect(functions.isPhoneNumber('8123456789')).toBe(false);
    expect(functions.isPhoneNumber('(123) 3456-789')).toBe(false);
});

test('Email address should be in the format of zzz@zzzz.zzz or zzz@zzzz.zz', () => {
    expect(functions.isEmail('mdi@ismDF.dmf')).toBe(true);
    expect(functions.isEmail('slfZ@wofe.fi')).toBe(true);
    expect(functions.isEmail('812@34567.89')).toBe(false);
    expect(functions.isEmail('afouhsnDFj')).toBe(false);
});

test('The password\' s first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used', () => {
    expect(functions.isStrongPassword('gjidSDEfeo13')).toBe(true);
    expect(functions.isStrongPassword('SKFS3dja1284')).toBe(true);
    expect(functions.isStrongPassword('812@2234489')).toBe(false);
    expect(functions.isStrongPassword('afouhsnDFj2134325425')).toBe(false);
});

test('Date should be in the format of XX / XX / YYYY where XX can be 1 or 2 digits long and YYYY is always 4 digits long.', () => {
    expect(functions.isDate("2/28/2007")).toBe(true);
    expect(functions.isDate("12/2/2020")).toBe(true);
    expect(functions.isDate("2/3/102")).toBe(false);
    expect(functions.isDate("123/24/1203")).toBe(false);
});

test('HexColor should be in the format #XXXXXX', () => {
    expect(functions.isHexColor("#123456")).toBe(true);
    expect(functions.isHexColor("#a2b7c9")).toBe(true);
    expect(functions.isHexColor("#Pa1239")).toBe(false);
    expect(functions.isHexColor("G0B88D6")).toBe(false);
});

