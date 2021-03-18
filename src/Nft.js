import './App.css';
import {useState} from 'react';
import web3 from './web3';
import lottery from './nftcontract';//this line import lottery folder
import ipfs from './ipfs';

import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

import NewPage from './Newpage';
import Tokencreate from './Tokencreate';
import PrintallImage from './Printallimage';
import Sendpage from './Sendpage';


function App() {

  const [toaddress,setToaddress] = useState("");
  const [tid,setId] = useState("");
  //const [turi,setUri] = useState("");
  const [tname,setName] = useState("");
  const [tsymbol,setSymbol] = useState("");
  //const [tokenuri,setTokenUri] = useState("");
  //var [getimageurl,setgetImage] = useState("");
  //const [tfile,setTfile] = useState("");
  const [ipfsHash,setIpfsHash] = useState(null);
  var [buffer,setBuffer] = useState("");


    

  


  return (
    <div className="App">
      
<center>
<br></br>
<h1>DEPLOY NFT Token</h1>

<form >


		  <label for="images">Upload Your Image     </label>
            <input 
			name="tfile"
			id="fileid"
              type = "file"
              
			  required
            />
			
             <button 
             type="submit"> 
             Upload Image NFT
             </button>
			 <br></br>
			 <br></br>
			 <br></br>
	</form>


<form id="create-course-form" >

<label for="name">Create Your NFT  Name    </label>
	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input
id="nameid"
  type='text'
  name="tname"
  required
  onChange={event => setName(event.target.value)}
  
/>
<br></br>
      <br></br>

	  <label for="symbol">Create Your NFT  Symbol    </label>
	  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

<input
id="symbolid"
  type='text'
  name="tsymbol"
  required
  onChange={event => setId( event.target.value)}
  
/>

<br></br>
<br></br>

<label for="address">Enter Your Mint Address  </label>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


<input
id="addressid"
  type='text'
  name="toaddress"
  required
  onChange={event => setToaddress( event.target.value)}
  
/>
<br></br>
      <br></br>

	  <label for="id">Create Your Unique Token-Id {' '}   </label>

<input
id="idid"
  type='text'
  name="tid"
  required
  onChange={event => setId( event.target.value)}
  
/>

<br></br>
<br></br>


<button 
             type="submit"> 
             Upload and Create NFT
             </button>

</form>



      
<br></br>
<br></br>


<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/newpage");
                }}>
            Get Single Image Page
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Tokencreate");
                }}
              >
                Token-Create page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Sendpage");
                }}>
                Send Pagess
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Printallimage");
                }}
              >
                PrintallImage page
              </button>


</center>

<br></br>
<br></br>
  <table bordered responsive>
                
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{tname}</td>
                  </tr>
				  <tr>
                    <td>Symbol</td>
                    <td>{tsymbol}</td>
                  </tr>
				  
				  <tr>
                    <td>Token-Id</td>
                    <td>{tid}</td>
                  </tr>
				  <tr>
                    <td>Image-URL</td>
                    <td>https://ipfs.io/ipfs/{ipfsHash}</td>
                  </tr>
				  <tr>
                    <td>Image-View</td>

                    <td><img src={localStorage.getItem('myimageuri')}  alt={'C - language'} /> 			
					</td>
                  </tr>         
                </tbody>

            </table>

			



            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
            <Route path="/newpage">
              <NewPage />
            </Route>
            <Route path="/tokenpage">
              <Tokencreate />
            </Route>
            <Route path="/sendpage">
              <Sendpage />
            </Route>
            <Route path="/printallimage">
              <PrintallImage />
            </Route>
          </Switch>
        </Router>

	  
      </div>      
  );
}

export default App;
