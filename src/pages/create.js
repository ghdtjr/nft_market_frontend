import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import Header from '../components/Header';
import './create.scss';
import contract_data from '../abi/ERC721_abi';

var contract;
var web3;
function Create() {
    useEffect(() => {
        web3 = new Web3(
            new Web3.providers.HttpProvider(`https://ropsten.infura.io/v3/da65c8aa45a14f99bb85e8670e26528f`)
        );
        contract = new web3.eth.Contract(contract_data[0], contract_data[1]);
    }, []);

    const [account, setAccount] = useState('');
    // check connection if not connect with metamask
    const getAccount = async () => {
        try {
            if (window.ethereum) {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                
                setAccount(accounts[0]);
            } else {
                alert("Install Metamask!");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const test_call = () => {
        console.log(account)
        console.log(contract)
        web3.personal.sign(web3.fromUtf8("Hello from Toptal!"), web3.eth.coinbase, console.log);
        var tx = contract.methods.safeMint(account, "12314324123");
        const receipt = tx
            .send({
                from: account,
                gas: 700000
            }).then(console.log)
    }

    const [file, setFile] = useState('');
    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='body'>
                <h1> Create New Item</h1>
                <div>
                    <h3> Image, Video, Audio, or 3D model</h3>
                    <input type="file" onChange={handleChange}></input>
                    <img src={file}></img>
                </div>
                <div>
                    <h3> Name </h3>
                    <input className='inputBox'></input>
                </div>
                <div>
                    <h3> Description </h3>
                    <input className='inputBox'></input>
                </div>
                <div>
                    <button> Create </button>
                </div>
            </div>
            
            <div>
                <button onClick={getAccount}> connect wallet</button>
                {account}
                <div></div>
                <button onClick={test_call}> Mint </button>
            </div>
        </div>
    )
}

export default Create;