import express from "express";
import {getUserOrganizations} from "./controllers/organization.controller";

const router = express.Router();

router.get('/', getUserOrganizations);

export default router;
