const SimpleContract = artifacts.require('SimpleContract');
const Auction = artifacts.require('Auction');

module.exports = function (deployer) {
  deployer.deploy(SimpleContract);
  deployer.deploy(Auction);
};
