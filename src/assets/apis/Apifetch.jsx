import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from "react-router-dom"

const Apifetch = () => {

  const [data, setData] = useState([])
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await axios.get("/api/Restaurant")
      console.log("Restaurant List:", response.data)
      setData(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        background: "#0f172a",
        padding: "30px",
        minHeight: "100vh"
      }}
    >

      {data.map((item) => (

       <div style={{margin:"auto"}}>
         <Card key={item.restaurantID} style={{ width: "18rem", height: "100%" }}>
  <Card.Body
    style={{
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }}
  >

    <Card.Title
      style={{
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 700,
        
      }}
    >
      {item.restaurantName}
    </Card.Title>

    <Card.Text style={{ fontFamily:"system-ui", fontWeight: 500,fontSize:20 }}>
      Address: {item.address}
    </Card.Text>

    <Card.Text style={{ fontFamily: "-apple-system", fontWeight: 600,fontSize:25   }}>
      Type: {item.type}
    </Card.Text>

    <Card.Text style={{margin:"auto"}}>
      Parking: {item.parkingLot ? "Available" : "Not Available"}
    </Card.Text>

    <Button
      style={{ marginTop: "40px" }}
      variant="primary"
      onClick={() => navigate(`/booking/${item.restaurantID}`)}
    >
      Book Seat
    </Button>

  </Card.Body>
</Card>
</div>
      ))
      }

    </div >
  )
}

export default Apifetch