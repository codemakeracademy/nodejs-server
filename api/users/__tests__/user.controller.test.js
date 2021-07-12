import {getUsersList} from "../controllers/user.controller";

jest.mock('../services/user.service', () => {
    return {
        getUsersList: (params) => {return Promise.resolve(params)}
    }
})

describe("User Controller Test", () => {
    test('Get User List should get correct default parameters',  async () => {
        const req = {
            query: {}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await getUsersList(req, res, next);
        expect(res.json).toBeCalledWith({search: '', skip: 0, limit: 100});
    })
    test('Get User List should get correct parameters from query',  async () => {
        const req = {
            query: {search: '123', skip: '20', limit: '40'}
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();
        await getUsersList(req, res, next);
        expect(res.json).toBeCalledWith({search: '123', skip: 20, limit: 40});
    })
});
