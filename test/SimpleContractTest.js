const SimpleContract = artifacts.require('SimpleContract');

contract('SimpleContract', (accounts) => {
  it('should set data correctly', async () => {
    const simpleContractInstance = await SimpleContract.deployed();
    const newData = 123;
    await simpleContractInstance.setData(newData, { from: accounts[0] });
    const data = await simpleContractInstance.data();
    assert.equal(data, newData, 'Data not set correctly');
  });
});
