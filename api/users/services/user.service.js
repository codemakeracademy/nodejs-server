/**
 *
 * @param {{search?: string, skip?: number, limit?: number}} params
 */
export function getUsersList(params) {
    return Promise.resolve([{name: 'Ivan', id: 1}]);
}

export function getUserById(userId) {
    return Promise.resolve({name: 'Ivan', id: userId});
}
