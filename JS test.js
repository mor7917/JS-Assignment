
const NFTs = []

function mintNFT (_name,_eyeColor,_shirtType,_bling) {
    const NFT ={
        "name": _name,
        "eyeColor": _eyeColor,
        "shirtType": _shirtType,
        "bling": _bling,
    }
    NFTs.push(NFT);
    console.log("Minted: "+ _name);
}

function listNFTs () {
for(let i=0; i<NFTs.length;i++){
    console.log("\n ID:\t\t"+(i+1));
    console.log(" Name:\t\t" + NFTs[i].name);
    console.log(" Eyecolor:\t" +NFTs[i].eyeColor);
    console.log(" Shirt Type:" +NFTs[i].shirtType);
    console.log(" Bling:\t\t" +NFTs[i].bling);
}
}

function getTotalSupply() {
console.log("\n" + NFTs.length);
}

mintNFT("Bob","Blue","Hoodie","Gold Chain");
mintNFT("Tim","Black","Shirt","Gold Chain");
mintNFT("Jim","Green","Jacket","Gold Chain");
mintNFT("Kim","White","Coat","Gold Chain");
listNFTs();
getTotalSupply();
