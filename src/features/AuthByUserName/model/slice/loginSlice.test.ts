import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('username'),
        )).toEqual({ username: 'username' });
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'pass' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('password'),
        )).toEqual({ password: 'password' });
    });
});
