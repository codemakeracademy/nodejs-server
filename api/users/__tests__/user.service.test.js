import {getUsersList} from "../services/user.service";
const mockingoose = require('mockingoose');
const User = require('../models/user.model');

describe('User service Test', () => {
    test('Shoud Get User List With Correct Parameters', async () => {
        mockingoose(User).toReturn((query) => {
            expect(query.getQuery()).toStrictEqual({name: /123/img});
            return [{}]
        }, 'find');
        const list = await getUsersList({search: '123'});
        expect(list.length).toBe(1);
    });
});
