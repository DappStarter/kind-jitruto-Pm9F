require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hidden enter october food pledge riot six purse hundred light army genuine'; 
let testAccounts = [
"0x649207fdd2aa112370709cf45c5c5eacb1cb4654cc2cc75f410ace37b57c5fec",
"0x25a3e22490490495105243d6a2b38bed689e01ad2be2794fb4e6db29de15883b",
"0x902a8cb4f3acd0bc9bd2cda10e11892f8027579f6d49a26e41b9d9f0aa69414a",
"0x6ddff53b1fcf99d4fc807c6d8c3de842e3979acae00f60fe5cb4db917d8eb26f",
"0x4316d9557dae694505d7c33ab23e231d9746c040d059bb58b6d6e8a64d87103e",
"0x6812514ac2ad45b082cc2244ed4082326d4f9c727580e3b587e58ff02a2780f6",
"0x741d991a71c655f3cf619552d7bf7d126d7bb682a65085c118a22f689e6aef7b",
"0xb482468eff209abe881fa7eb4d78f1d7ef1772c6a199fb296eb606ddc8f260df",
"0xc636ffb8fdde0a83ecdb9a956fa11eb6baf4ea1963f604315e50cfd7f08bdd68",
"0x80db86ffbe1f1d5bc064c3b1a65a481d638295980be79b759b589bed56b6ca6c"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


