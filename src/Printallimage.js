import React from "react";
import history from "./utils/history";

//import {useState} from 'react';
import web3 from './web3';

import { Router, Route, Switch } from "react-router-dom";

import Nft from "./Nft";
import Sendpage from "./Sendpage";
import Newpage from "./Newpage";
import Tokencreate from "./Tokencreate";
import getaaa from "./cabi";



function Printallimage() {

  //const [toaddress] = useState("");
  //const [tid,setId] = useState("");
  //const [turi,setUri] = useState("");
  //const [tname,setName] = useState("");
  //const [tsymbol,setSymbol] = useState("");
  //const [tokenuri,setTokenUri] = useState("");
  //var [getimageurl,setgetImage] = useState("");
  //const [tfile,setTfile] = useState("");
  //const [ipfsHash,setIpfsHash] = useState(null);
  //var [buffer,setBuffer] = useState("");
  //const [ethAddress,setEthAddress] = useState("");
  //const [blockNumber,setBlocknumber] = useState("");
  //const [transactionHash,setTransaction] = useState("");
  //const [gasUsed,setGasUsed] = useState("");
  //const [txReceipt,se] = useState("");

  //const [dataset,setdatas] = useState("");

  //const [address,setaddress] = useState("");
  //const [geta,setgeta] = useState("");

  //var [printgeta,setgetaprint] =useState("");
  //var [printgeta2,setgetaprint2] =useState("");

  //var [printgeta3,setgetaprint3] =useState("");
  //var [printgeta4,setgetaprint4] =useState("");

  //var [selectedImages,setSelectedImages] = useState([]);


  //const [imgurl,setimgurl] = useState([]);


  

  

  const names = [];
  //const namesc = [];

  //const edho = (source) =>{
    //  return  selectedImages.map((photo) => {
      //    return <img src={photo} key={photo}/>

      //})
    //};
        
      
  
    
      //new write below

      //const componentDidMount = () =>(event){
        
        // your source code to load initial data

        
   // }


      const onSubmitNFT = async (event) => {
    
    
      alert("waiting for pic url");
    
      //var ta=tname;
      //var tb=tsymbol;
      //var tc='https://ipfs.io/ipfs/'+ipfsHash;
      //var td=toaddress;
      //var te=tid;
      //var tf='https://ipfs.io/ipfs/'+ipfsHash;
      
      
    
      //alert("im work ta tb tc  td te tf  "+ta+" "+tb+" "+tc+" "+td+" "+te+" "+tf);
    
      event.preventDefault();
    
      //const accounts = await  web3.eth.getAccounts();
    
    
        
    alert("completed");    
    
    
    alert(localStorage.getItem('myData'));


    //var poda=localStorage.getItem('myData');




    //add con add below

    //setaddress(localStorage.getItem('myData'));
    
 


  
    

   
    
    //alert("im work a +b"+td+" "+te+" "+tf);
    
    event.preventDefault();
    
    //const accounts = await web3.eth.getAccounts();
    
    
    
    //await geta.methods.tokenURI(te).send({
    //from: accounts[0]
    //value: this.setState({c:accounts[0]})
    
    //});


    

    for(var i=600;i<=700;i++){

     
      //var printgeta=await getaaa.methods.tokenURI(654).call();

      //setgetaprint(await getaaa.methods.tokenURI(654).call())

     // setgetaprint2(await getaaa.methods.tokenURI(657).call())

      //setgetaprint3(await getaaa.methods.tokenURI(3214).call())

      //setgetaprint4(await getaaa.methods.tokenURI(i).call())


      
      if(await getaaa.methods.tokenURI(i).call() === ""){

      }
      else{

        

        names.push(await getaaa.methods.tokenURI(i).call());

        //setimgurl(await getaaa.methods.tokenURI(i).call());

      }



    


      //for(var i=0;i<=names.length;i++){

        //var a=document.createElement("img")

        //a.src=names[i]

       // document.getElementById("prag").append(a)

     // }
      


      //setSelectedImages(printgeta);


    //settodos(await getaaa.methods.tokenURI(i).call());

    //this.setState({todos});

    }

    

    alert(names.length);


    for(i=0;i<names.length;i++){


        var a=document.createElement("img")

        a.src=names[i]
        a.width=400
        a.height=400

        document.getElementById("prag").append(a)


      //setgetaprint(names[i]);

      alert(names[i]);
      //alert(selectedImages[i]);

    }

    

    
    
  };
    


  return (    

    <div className="App">


<h1>Print All NFT Image</h1>



<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/nft");
                }}>
                Go Deploy Page 
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/sendpage");
                }}
              >
                Go Transfer page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/tokencreate");
                }}>
                Tokencreate Page 
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/newpage");
                }}
              >
                Get Single Image Page
              </button>




              <br></br>
<br></br>


      
<center>
<br></br>


		<form onSubmit={onSubmitNFT} id="create-course-form" >




<button 
             type="submit"> 
             Press Button To Get All Images Print
             </button>

</form>



      
<br></br>
<br></br>


</center>




      



<div>
      {names.map(name => <h2>{name}</h2>)}
      	</div>


          <div>
        {names.map((name) => (
          
            <h3>{names}</h3>
            
            
          
            ))}
            </div>
              



<br></br>
<br></br>



                    
                    

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
            <Route path="/nft">
              <Nft />
            </Route>
            <Route path="/sendpage">
              <Sendpage />
            </Route>
            <Route path="/tokencreate">
              <Tokencreate />
            </Route>
            <Route path="/newpage">
              <Newpage />
            </Route>
          </Switch>
        </Router>

        
        <div>
            
        </div>


        <div id="prag">



</div>

        

	  
      </div>      
  );
}

export default Printallimage;
