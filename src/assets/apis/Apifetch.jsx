import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from "react-router-dom"

import "./Apifetch.css";

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

  const openMap = (name, address) => {
    const query = `${name} ${address}`;
    const mapUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
    window.open(mapUrl, "_blank");
  };

  return (
    <div className="background cardgrid">

      

      {data.map((item) => (

        <div className="cardcontainer" key={item.restaurantID}>

          <Card style={{ width: "18rem", height: "100%" }}>

            <Card.Body className="cardbody-style">

              <Card.Title className="cardtitle-style">
                {item.restaurantName}
              </Card.Title>

              <Card.Text className="addresstext">
                Address: {item.address}
              </Card.Text>

              <Card.Text className="typetext">
                Type: {item.type}
              </Card.Text>

              <Card.Text className="parkingtext">
                Parking: {item.parkingLot ? "Available" : "Not Available"}
              </Card.Text>

              <Button
                className="bookbutton"
                variant="primary"
                onClick={() => navigate(`/booking/${item.restaurantID}`)}
              >
                Book Seat
              </Button>

              <Button
                style={{ marginTop: "3px" }}
                className="mapbutton"
                onClick={() => openMap(item.restaurantName, item.address)}
              >
                View Location
              </Button>

            </Card.Body>

          </Card>

        </div>

      ))}

    </div>
  )
}

export default Apifetch