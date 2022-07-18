require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture rebel frame security iron note shift pupil include arctic bottom sunset'; 
let testAccounts = [
"0x1a1cbde38f7cb5b0218327a5ef474aae8bd2a02ea96ec115b35bc546898d9e44",
"0x730dcc2cf183bada6cd9be06fc4e2f08fb979b227cd2f419de3b79615e517b60",
"0x69bfddc7ca1c36ac230138ba68c351559fba9bb8b8635fd3fdb1b0365b051a7d",
"0xf09fa7ccbd92652af435a9498d12a210a620c8f7b40091ab33240ef0290c5d31",
"0x30071127b22a8f0cbb060f643d71187858b40d28d646660c6af181fea7a23cdd",
"0x1617b4908d0b7c66bdb70f219805796951d5673e65f524a3be2ae7e62dbd2468",
"0x06c37b4a56b638613d05cdead6a259e52952a1a94db64ec8f3324dc827e07d72",
"0x1c2f1d84ac912663922ad78db6e3130e05203ab2840b5f0be335392637d5e46b",
"0xf00e901f06813b51e9c2895913ba03bd7b4d2ca2ef9e53cacf8c1ceb09ae496e",
"0xf940395086411ca361ed496f2aabc580288f2ffae6544e3898e8ef47102107f7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

