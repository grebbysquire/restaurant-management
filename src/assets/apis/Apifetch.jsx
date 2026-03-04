import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const Apifetch = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate();

  const getData = async () => {
    try {
      const response = await axios.get(
        "/api/Restaurant"
      );
      console.log("good:", response.data);
      setData(response.data);  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
   
  },[])
  return (
    <div style={{display:'flex',paddingTop:"10"}}>
       <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'20px'}}>
      {data.map((item, index) => (
  <Card key={index} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.thumbnail}/>
    <Card.Body>
      <Card.Title>{item.restaurantName}</Card.Title>
       <Card.Text>{item.parkingLot}</Card.Text>
      <Card.Text>{item.address}</Card.Text>
     
      <Card.Text>{item.type}</Card.Text>
      
      <Button  onClick={()=>navigate("/booking")}
      variant="primary">Book Seat</Button>
    </Card.Body>
  </Card>
))}

  
    
    </div>
    </div>
  )
}

export default Apifetch
