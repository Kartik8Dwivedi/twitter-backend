import {execute} from '../../src/services/dummy-service.js'
import {helper} from '../../src/services/helper-service.js'

jest.mock('../../src/services/helper-service.js');

test('result is true and returns Learning NodeJS', () => {

    helper.mockReturnValue(true);
    const result = execute();
    expect(result).toBe('Learning NodeJS');
});
test('result is false and returns Learning ReactJS', () => {

    helper.mockReturnValue(false);
    const result = execute();
    expect(result).toBe('Learning ReactJS');
});