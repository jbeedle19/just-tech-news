const { format_date, format_plural, format_url } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-02-01 14:19:03');

    expect(format_date(date)).toBe('2/1/2021');
});

test('format_plural() returns pluralized words', () => {

    expect(format_plural('tiger', 2)).toBe('tigers');
    expect(format_plural('lion', 1)).toBe('lion');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});