import User from '../models/user.model';
/**
 *
 * @param {{search?: string, skip?: number, limit?: number}} params
 */
export function getUsersList(params) {
    const {search} = params;
    return User.find({name: new RegExp(search, 'gim')}).exec();
}

export function getUserById(userId) {
    return User.findById(userId).exec();
}

export function createUser(userData) {
    const user = new User(userData);
    return user.save();
}
