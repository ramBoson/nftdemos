// /* global AlgoSigner */
// import firebase from "firebase";
// import fireDb from "./firebase";
// import Popup from './Popup';
// import axios from 'axios';
import React, { useState,useEffect,useCallback } from "react";
import fs from 'fs';
const NewIpfs=()=>{

    let pinataApiKey='88348e7ce84879e143e1';
    let pinataSecretApiKey='e4e8071ff66386726f9fe1aebf2d3235a9f88ceb4468d4be069591eb78d4bf6f';

const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK(pinataApiKey, pinataSecretApiKey);
const loadDoc=()=>{

    alert("new");

    pinata.testAuthentication().then((result) => {
        //handle successful authentication here
        console.log(result);


        const metadata = {
            name: 'demo',
            keyvalues: {
                newKey: 'demos',
                existingKey: 'demos',
                existingKeyToRemove: null
            }
        };
        pinata.hashMetadata('QmRN6acixDMyB6ZT9EWDeUiWVZ5xg8eFKhU5wRFy5jDot3', metadata).then((result) => {
            //handle results here
            console.log(result);

            pinata.userPinnedDataTotal().then((result) => {
                //handle results here
                console.log("result");
                console.log(result);

            }).catch((err) => {
                //handle error here
                console.log(err);
            });


            
            //start

// const sourcePath = 'C:/Users/ramam/Downloads/dhon.png';
// console.log(sourcePath);
// const options = {
//     pinataMetadata: {
//         name: 'My Awesome Website',
//         keyvalues: {
//             customKey: 'customValue',
//             customKey2: 'customValue2'
//         }
//     },
//     pinataOptions: {
//         cidVersion: 0
//     }
// };
// pinata.pinFromFS(sourcePath, options).then((result) => {
//     //handle results here
//     console.log(result);
// }).catch((err) => {
//     //handle error here
//     console.log("error");
//     console.log("error",err);

// });


const fs = require('fs');
const readableStreamForFile = fs.createReadStream('./dhon.png');
console.log("reaf",readableStreamForFile)
const options = {
    pinataMetadata: {
        name: 'MyCustomName',
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});




            //end




        }).catch((err) => {
            //handle error here
            console.log(err);
        });

    }).catch((err) => {
        //handle error here
        console.log(err);
    });


}


  
  return (
    <div >

        <h1 style={{color:'white'}}>hello</h1>

        <div style={{color:'white'}}>

      <button type="submit" onClick={loadDoc}>Algorand </button>
      </div>
      
  </div>
  );
}
export default NewIpfs;