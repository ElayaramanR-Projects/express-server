import { Router } from "express";
import { getGuns, getGun , newGun, storeGun} from "./controller.js";

export const gunRoutes = new Router();

gunRoutes.get('/', getGuns);
gunRoutes.get('/new', newGun);

gunRoutes.get('/:id', getGun);

gunRoutes.post('/', storeGun);