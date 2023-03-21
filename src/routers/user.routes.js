const { Router } = require("express");
const { getUsers } = require("../controllers/user.controller");

const router = Router();

router.get("/",getUsers);
// router.get("/" );

module.exports = router;