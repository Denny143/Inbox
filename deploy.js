const HDWalletprovider=require('truffle-hdwallet-provider');
const Web3=require('web3');
const { interface, bytecode } = require('./compile');

const provider= new HDWalletprovider(
    'trust pulse version gadget energy floor hold another spread ring excite draw',
    'https://rinkeby.infura.io/v3/d6695365376345c3899e0684c9833b75'
);

const web3= new Web3(provider);

const deploy =async()=>{
    const accounts= await web3.eth.getAccounts();
    console.log('Attempting to deploy from account: ', accounts[0])

    const result=await new web3.eth.Contract(JSON.parse(interface))
                .deploy ({data: bytecode, arguments:['Hi There!']})
                .send({gas:'1000000', from: accounts[0]})
        console.log('Address of the deployment: ', result.options.address);        
};
deploy();

