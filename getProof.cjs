const ethers = require('ethers');
const merkleTree = require('./loadMerkleDistFile.cjs');
const utils = require('./buildMerkleMap.cjs');

let distFile = process.argv[2];
let account = process.argv[3];

let distribution = utils.loadMerkleDistFile(distFile);

let items = distribution.values.map(v => { return {
    account: v[0],
    token: v[1],
    claimable: ethers.BigNumber.from(v[2]),
}});

let proof = merkleTree.proof(items, account, utils.EulTokenAddr)

console.log(`
How to claim `$TOKEN` via etherscan:
Visit: https://etherscan.io/address/`$HEX_ADDRESS`#writeContract
Use the "Connect to Web3" button
Expand "claim" row.
account: ${account}
token: ${utils.EulTokenAddr}
claimable: ${proof.item.claimable.toString()}
proof: [${proof.witnesses.join(',')}]
stake: 0x0000000000000000000000000000000000000000
Press the "Write" button, and then follow prompts in metamask to send transaction.
`);

console.log('Successfully processed');
