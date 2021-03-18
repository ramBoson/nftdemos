import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";

//import Nf from "./Nft";
//import NewPage from "./Newpage";
//import Sendpage from "./Sendpage";
//import Tokencreate from "./Tokencreate";
//import Printallimage from "./Printallimage";


function App() {
  return (
    <div class="container h-100 d-flex justify-content-center">
      <div class="jumbotron my-auto">

        <center>

          <br></br>
          <br></br>
          <br></br>
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to page</div>
              <br></br><br></br><br></br>
              
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Nft");
                }}
              >
                Nft Deploy Contract     
              </button>




              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Newpage");
                }}
              >
                Get Single Image Page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Sendpage");
                }}
>
  Transfer NFT-Owner
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Tokencreate");
                }}
              >
                Mint-Token
              </button>


              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Printallimage");
                }}
              >
                PrintallImage Page
              </button>


            </Route>
            
            
          </Switch>
        </Router>
        </center>
      </div>
      
    </div>
  );
}

export default App;
