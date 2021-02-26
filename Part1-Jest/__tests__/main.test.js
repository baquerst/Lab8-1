const formatVolumeIconPath = require("../assets/scripts/main");


describe('volume icon path', () => {
    test('if volume > 66 icon is 3', () => {
        expect(formatVolumeIconPath(100)).toContain('3');
    });

    test('if 33 < volume < 66 icon is 2', () => {
        expect(formatVolumeIconPath(50)).toContain('2');
    });

    test('if 0 < volume < 33 icon is 1', () => {
        expect(formatVolumeIconPath(5)).toContain('1');
    });

    test('if no volume icon is 0', () => {
        expect(formatVolumeIconPath(0)).toContain('0');
    });
})