import User from '../models/user.model';
/**
 *
 * @param {{search?: string, skip?: number, limit?: number}} params
 */
export function getUsersList(params) {
    return User.find({}).exec();
    // Promise.resolve([{name: 'Ivan', id: 1}]);
}

export function getUserById(userId) {
    return User.findById(userId).exec();
}

export function createUser(userData) {
    const user = new User(userData);
    return user.save();
}
