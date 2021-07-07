import * as organizationsService from "../services/organization.service";

export function getUserOrganizations(req, res, next) {
    return organizationsService.getUserOrganizations(req.user).then(result => {
        res.json(result);
    }).catch(next);
}
