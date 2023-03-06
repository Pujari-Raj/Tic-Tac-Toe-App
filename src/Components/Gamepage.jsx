import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Col, Container, Row, Button,Card, CardBody } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "react-toastify/dist/ReactToastify.css";
import Icons from "./Icons";

const itemArray = new Array(9).fill("empty");

const Gamepage = ({ playersdata }) => 
  {
    // Taking the players name
    const player1name = playersdata.player1_name;
    const player2name = playersdata.player2_name;

    const[isCross, setIsCross] = useState({
      player1name,
      player2name
    });
    
    const[message, setMessage] = useState("");

    //reload game
    const reloadGame= () =>{
      setIsCross(false);
      setMessage("");
      itemArray.fill("empty", 0, 9);
    }

     //  checking  winner of the game on different conditions
    const checkIsWinner = () => {
      if (
        itemArray[0] === itemArray[1] &&  
        itemArray[0] === itemArray[2] &&
        itemArray[0] !== "empty"
      ) {
        setMessage(`${itemArray[0]} won`);
      } else if (
        itemArray[3] !== "empty" &&
        itemArray[3] === itemArray[4] &&
        itemArray[4] === itemArray[5]
      ) {
        setMessage(`${itemArray[3]} won`);
      } else if (
        itemArray[6] !== "empty" &&
        itemArray[6] === itemArray[7] &&
        itemArray[7] === itemArray[8]
      ) {
        setMessage(`${itemArray[6]} won`);
      } else if (
        itemArray[0] !== "empty" &&
        itemArray[0] === itemArray[3] &&
        itemArray[3] === itemArray[6]
      ) {
        setMessage(`${itemArray[0]} won`);
      } else if (
        itemArray[1] !== "empty" &&
        itemArray[1] === itemArray[4] &&
        itemArray[4] === itemArray[7]
      ) {
        setMessage(`${itemArray[1]} won`);
      } else if (
        itemArray[2] !== "empty" &&
        itemArray[2] === itemArray[5] &&
        itemArray[5] === itemArray[8]
      ) {
        setMessage(`${itemArray[2]} won`);
      } else if (
        itemArray[0] !== "empty" &&
        itemArray[0] === itemArray[4] &&
        itemArray[4] === itemArray[8]
      ) {
        setMessage(`${itemArray[0]} won`);
      } else if (
        itemArray[2] !== "empty" &&
        itemArray[2] === itemArray[4] &&
        itemArray[4] === itemArray[6]
      ) {
        setMessage(`${itemArray[2]} won`);
      }
     
    }

    // Changing the cross/circle and showing message
    const changeItem = itemNumber =>{
      if (message) {
        return toast(message, {type: "success"});
      }

      if (itemArray[itemNumber] === "empty") {
          itemArray[itemNumber] = isCross ? player1name : player2name;
          setIsCross(!isCross);       
      }

      else{
        // return toast(message, {type: "error"});
        message = toast.error('Game is Draw, Reload the page');
      }

      checkIsWinner();
    }

  return (
    <Container className="p-5">
        <ToastContainer position='bottom-center' />
        <Row>
          <Col md={6} className='offset-md-3'>
            {message ? (
              <div className='mb-2 mt-2'>
              <h1 className='text-success text-uppercase text-center'>
                {message}
              </h1>
              <Button color='success' block onClick={reloadGame}>
                Reload Game
              </Button>
            </div>
            )  :(
              <h1 className='text-center text-warning'>
              {isCross ? player1name : player2name } turn
            </h1>
            )}
            <div className='grid'>
            {itemArray.map((item, index)  => ( 
              <Card color='warning' onClick={()=> changeItem(index)}>
                <CardBody className='box'>
                  <Icons name={item} key={index} />
                </CardBody>
              </Card>
            ))}
          </div>
          </Col>
        </Row>
    </Container>
  );
};

export default Gamepage;
