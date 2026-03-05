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
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: "20px" }}>

      {data.map((item) => (

        <Card key={item.restaurantID} style={{ width: '18rem' }}>

          <Card.Body>

            <Card.Title>{item.restaurantName}</Card.Title>

            <Card.Text>
              Address: {item.address}
            </Card.Text>

            <Card.Text>
              Type: {item.type}
            </Card.Text>

            <Card.Text>
              Parking: {item.parkingLot ? "Available" : "Not Available"}
            </Card.Text>

            <Button
              variant="primary"
              onClick={() => navigate(`/booking/${item.restaurantID}`)}
            >
              Book Seat
            </Button>

          </Card.Body>

        </Card>

      ))}

    </div>
  )
}

export default Apifetch