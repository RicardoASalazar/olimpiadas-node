const { Router } = require("express");
const { filter, getById,getAll } = require("../controllers/complejo.controller");

const router = Router();

router.get("/:filter", filter);
router.get("/:cve", getById );
router.get('/',getAll)

module.exports = router;
