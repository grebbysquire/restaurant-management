import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const Booking = () => {

  const { id } = useParams()
  const [data, setData] = useState(null)

  const apiFetchById = async () => {
    try {

      console.log("Restaurant ID:", id)

      const response = await axios.get(`/api/Restaurant/${id}`)

      console.log("Restaurant Data:", response.data)

      setData(response.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    apiFetchById()
  }, [id])

  if (!data) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: "40px" }}>

      <Card style={{ width: '20rem' }}>

        <Card.Body>

          <Card.Title>{data.restaurantName}</Card.Title>

          <Card.Text>
            Address: {data.address}
          </Card.Text>

          <Card.Text>
            Type: {data.type}
          </Card.Text>

          <Card.Text>
            Parking: {data.parkingLot ? "Available" : "Not Available"}
          </Card.Text>

          <Button variant="success">
            Confirm Booking
          </Button>

        </Card.Body>

      </Card>

    </div>
  )
}

export default Booking