
export function getUserOrganizations(user) {
    return Promise.resolve([{name: 'organization1', user: user}]);
}
