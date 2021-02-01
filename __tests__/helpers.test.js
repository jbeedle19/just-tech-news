const { format_date, format_plural } = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2021-02-01 14:19:03');

    expect(format_date(date)).toBe('2/1/2021');
});

test('format_plural() returns pluralized words', () => {

    expect(format_plural('tiger', 2)).toBe('tigers');
    expect(format_plural('lion', 1)).toBe('lion');
});