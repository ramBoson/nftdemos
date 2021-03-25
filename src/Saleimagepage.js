import React, { useState } from "react";
import history from "./utils/history";

//import {useState} from 'react';
import web3 from './web3';

import { Router, Route, Switch } from "react-router-dom";


function Second() {
    return (
      <>
        <div class="display-4 mb-1">This is the Sales image page</div>
       
  
        <button
          class="btn btn-info btn-block"
          type="button"
          onClick={() => {
            history.push("/first");
          }}
        >
          First
        </button>
      </>
    );
  }


export default Salepage