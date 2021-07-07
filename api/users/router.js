import express from 'express';
import {getUserById, getUsersList, setUser} from "./controllers/user.controller";
import organizationsRouter from "../organizations/router";
const router = express.Router();

router.get('/', getUsersList);
router.get('/:userId', getUserById);
router.use('/:userId/organizations', setUser, organizationsRouter)

export default router;
