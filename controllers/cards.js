const errorHandler = require("../middlewares/errorHandler");
const tarotDeck = require("../model/tarotDeck")

const getAllCards = (req, res) => {
  res.status(200).json(tarotDeck);
}

const getOneCard = (req , res) => {
  const {id} = req.params;
  const {length} = tarotDeck;

  if (id<0 || id > length){
    errorHandler("User asking for a bad card", req, res);
  }

  res.status(200).json(tarotDeck[id])
}

module.exports = {getAllCards, getOneCard};