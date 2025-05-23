import axios from 'axios';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //    dispatch = jest.fn();
    //    getState = jest.fn();
    // });
    //
    // test('success auth', async () => {
    //    const userValue = { username: 'username', id: '1' };
    //    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //    const action = loginByUsername({ username: 'username', password: 'password' });
    //    const result = await action(dispatch, getState, undefined);
    //
    //    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //    expect(dispatch).toHaveBeenCalledTimes(3);
    //    expect(mockedAxios.post).toHaveBeenCalled();
    //    expect(result.meta.requestStatus).toBe('fulfilled');
    //    expect(result.payload).toEqual(userValue);
    // });
    //
    // test('auth error', async () => {
    //    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //    const action = loginByUsername({ username: 'username', password: 'password' });
    //    const result = await action(dispatch, getState, undefined);
    //
    //    expect(dispatch).toHaveBeenCalledTimes(2);
    //    expect(mockedAxios.post).toHaveBeenCalled();
    //    expect(result.meta.requestStatus).toBe('rejected');
    //    expect(result.payload).toBe('error');
    // });

    test('success auth', async () => {
        const userValue = { username: 'username', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('auth error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

        const thunk = new TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
