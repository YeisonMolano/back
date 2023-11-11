const jStat = require('jstat');

class ChiInv {
  constructor(){}

  chiInv(probability, degreesOfFreedom) {
    return jStat.chisquare.inv(probability, degreesOfFreedom);
  }
}

module.exports.ChiInv = ChiInv;