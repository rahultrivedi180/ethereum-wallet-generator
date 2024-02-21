const { ethers } = require("ethers");
const fs = require("fs");

function generateWallet() {
  const numberOfWallets = process.argv[2];
  const wallets = [];
  for (let i = 0; i < numberOfWallets; i++) {
    const random = ethers.Wallet.createRandom();
    const { phrase, path } = random.mnemonic;

    const wallet = ethers.Wallet.fromMnemonic(phrase, path);
    const address = wallet.address;
    const privateKey = wallet.privateKey;

    wallets.push({ accountAddress: address, privateKey });
  }

  fs.appendFileSync("addresses.json", JSON.stringify(wallets, null, 2));
}

generateWallet();
