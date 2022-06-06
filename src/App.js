import React ,{ useState} from 'react';


import Icon from './Components/icons';

//toastify code
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
//Bootstram from reactstrap 
import {Card,CardBody,Container,Button,Col,Row} from "reactstrap"


import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
var count=0;
const itemArray = new Array(9).fill("empty");

const App = () => {
  const [isCross,setIsCross] = useState(false);
  const [winMessage, setWinMessage] =useState("");
//s
 const reloadGame = () => {
   count=0;
   setIsCross(false);
   setWinMessage("");
   itemArray.fill("empty",0,9);
 }
//s
 const checkisWinner = () => {
   if(count===9){
     setWinMessage(`Draw`);
   }
   if (itemArray[0]===itemArray[1]&& 
       itemArray[0]===itemArray[2]&&
       itemArray[0]!=="empty") {
         setWinMessage(`${itemArray[0]} wins`)
   }
   else if (itemArray[1]===itemArray[7]&& 
    itemArray[1]===itemArray[4]&&
    itemArray[1]!=="empty") {
      setWinMessage(`${itemArray[1]} wins`)
   }
   else if (itemArray[2]===itemArray[5]&& 
    itemArray[2]===itemArray[8]&&
    itemArray[2]!=="empty") {
      setWinMessage(`${itemArray[2]} wins`)
    }
    else if (itemArray[2]===itemArray[4]&& 
      itemArray[2]===itemArray[6]&&
      itemArray[2]!=="empty") {
        setWinMessage(`${itemArray[2]} wins`)
      }

   else if (itemArray[0]===itemArray[3]&& 
    itemArray[0]===itemArray[6]&&
    itemArray[0]!=="empty") {
      setWinMessage(`${itemArray[0]} wins`)
  }
  else if (itemArray[0]===itemArray[4]&& 
    itemArray[0]===itemArray[8]&&
    itemArray[0]!=="empty") {
      setWinMessage(`${itemArray[0]} wins`)
}
   else if(itemArray[3]===itemArray[4]&& 
    itemArray[3]===itemArray[5]&&
    itemArray[3]!=="empty"){
     
      setWinMessage(`${itemArray[3]} wins`)
    }
    else if (itemArray[6]===itemArray[7]&& 
      itemArray[6]===itemArray[8]&&
      itemArray[6]!=="empty") {
        setWinMessage(`${itemArray[6]} wins`)
  }
   
 }
 //s
 const changeItem = itemNumber => {
   if (winMessage) {
     return toast(winMessage,{type:"success"});
   }
   if(itemArray[itemNumber]==="empty"){
     count+=1;
    itemArray[itemNumber] = isCross ? "cross" :"circle";
    setIsCross(!isCross);
   }
   else {
     return toast("Already filled",{type: "error",theme:"colored",position:"top-right"});
   }
   checkisWinner(); 

 }
 //s
  return (
    <Container className='p-5'>
       <ToastContainer position='top-right'/>
       <Row>
         { winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-success text-uppercase text-center'>
                {winMessage}
              </h1>
              <Button 
              color='success'
              block
              onClick={reloadGame}
              >Relode the game</Button>
            </div>
         ) : ( 
           <h1 className='text-center text-warning'>
             {isCross? "Cross":"Circle"} turn's
           </h1>
          ) }
         <Col md={6} className="offset-md-3">
           <div className='grid' >
             {itemArray.map((item,index) => (
               <Card color="warning"  onClick={() => changeItem(index) }>
                 <CardBody>
                   <Icon name={item}/>
                 </CardBody>
               </Card>
             ) )}
           </div>
         </Col>
       </Row>
    </Container>
  );
}

export default App;
