import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Apifetch = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "/api/Restaurant"
      );
      console.log("good:", response.data);
      setData(response.data);  // check this line (explained below)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  },[])
  return (
    <div>
       <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:'20px'}}>
      {data.map((data,index)=>(
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.thumbnail}/>
      <Card.Body>
        <Card.Title style={{display:'block',margin:'auto'}}>{data. restaurantName}</Card.Title>
        <Card.Text style={{overflow:'auto', maxHeight:'50px'}}>{data.address}
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          {data.category}
        </Card.Text>
        <Card.Text>{data.price}</Card.Text>
        <Card.Text>{data.price}</Card.Text>
        <div>        
          <Button variant="primary" style={{display:'block',margin:'auto'}}>Go somewhere</Button>
</div>
      </Card.Body>
    </Card>
  
      ))}
    </div>
    </div>
  )
}

export default Apifetch
