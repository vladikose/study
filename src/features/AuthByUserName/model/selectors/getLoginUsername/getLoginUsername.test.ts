import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'username',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('username');
    });
    test('return empty value', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
