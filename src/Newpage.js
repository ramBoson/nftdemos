import React from "react";
import history from "./utils/history";

import {useState} from 'react';
import web3 from './web3';
//import lottery from './nftcontract';//this line import lottery folder
//import ipfs from './ipfs';
//import storehash from './storehash';

import { Router, Route, Switch } from "react-router-dom";

//import First from "./First";
//import Second from "./Second";
import Nft from "./Nft";
import Sendpage from "./Sendpage";
import Tokencreate from "./Tokencreate";
import Printallimage from "./Printallimage";




function NewPage() {

  
  
    
  return (
    <div className="App">
      
<center>
<br></br>
<h1>Get Single NFT Image</h1>
</center>
</div>

  );
  }

export default NewPage;
