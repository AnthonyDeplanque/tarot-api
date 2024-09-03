const express = require("express");
const cardController = require("../controllers/cards");

const router = express.Router();

router.get('/:id', cardController.getOneCard);
router.get('/', cardController.getAllCards);

module.exports = router;