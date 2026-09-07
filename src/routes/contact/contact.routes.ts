import { Router } from "express";

import {
  getContacts,
  createContact,
} from "../../controller/contact/contact.controller.js";

const router = Router();

router.get("/", getContacts);

router.post("/", createContact);

export default router;