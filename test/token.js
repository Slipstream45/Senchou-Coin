var token = artifacts.require("./token.sol")

contract('token', function(accounts){
	it("Sets total supply after deployment", function()
	{
		return token.deployed().then(function(instance){
			tokenInstance = instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply) {
			assert.equal(totalSupply.toNumber(), 100000, 'Sets total supply to 1,00,000');
		});
	});
});
