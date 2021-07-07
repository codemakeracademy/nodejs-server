import * as userService from '../services/user.service.js';

export function getUsersList(req, res, next) {
    const {
        search = '',
        skip = '0',
        limit = '100'
    } = req.query;
    const params = {
        search,
        skip: parseInt(skip, 10),
        limit: parseInt(limit, 10)
    }
    return userService.getUsersList(params).then(result => {
        res.json(result);
    }).catch(next);
}

export function getUserById (req, res, next) {
    const {userId} = req.params;
    return userService.getUserById(userId).then(result => {
        res.json(result);
    }).catch(next);
}

export function setUser (req, res, next) {
    const {userId} = req.params;
    return userService.getUserById(userId).then(user => {
       req.user = user;
       return next();
    });
}
