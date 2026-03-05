import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Naavbar from '../component/Naavbar'

const Booking = () => {

  const { id } = useParams()
  const [data, setData] = useState(null)
  const [guests, setGuests] = useState(1)

  const apiFetchById = async () => {
    try {
      const response = await axios.get(`/api/Restaurant/${id}`)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    apiFetchById()
  }, [id])

  if (!data) {
    return <h3 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h3>
  }

  const addGuests = () => {
    setGuests(guests + 1)
  }

  const decreaseGuests = () => {
    if (guests > 1) {
      setGuests(guests - 1)
    }
  }

  return (
    <div style={{
      backgroundColor: "#0f172a",
      minHeight: "100vh"
    }}>

      <Naavbar />

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: "60px"
      }}>

        <Card style={{
          width: '24rem',
          padding: "10px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
        }}>

          <Card.Body>

            <Card.Title style={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "20px"
            }}>
              {data.restaurantName}
            </Card.Title>

            <Card.Text>
              <strong>Address:</strong> {data.address}
            </Card.Text>

            <Card.Text>
              <strong>Type:</strong> {data.type}
            </Card.Text>

            <Card.Text>
              <strong>Parking:</strong> {data.parkingLot ? "Available" : "Not Available"}
            </Card.Text>

            {/* Guests Counter */}

            <div style={{
              marginTop: "20px",
              marginBottom: "20px",
              textAlign: "center"
            }}>

              <strong>No of Guests</strong>

              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
                gap: "15px"
              }}>

                <button
                  onClick={decreaseGuests}
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "#ef4444",
                    color: "white",
                    fontSize: "18px"
                  }}
                >
                  -
                </button>

                <span style={{
                  fontSize: "20px",
                  fontWeight: "bold"
                }}>
                  {guests}
                </span>

                <button
                  onClick={addGuests}
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "#22c55e",
                    color: "white",
                    fontSize: "18px"
                  }}
                >
                  +
                </button>

              </div>
            </div>

            <Button
              variant="success"
              style={{
                width: "100%",
                borderRadius: "10px",
                padding: "10px",
                fontWeight: "bold"
              }}
            >
              Confirm Booking
            </Button>

          </Card.Body>

        </Card>

      </div>

    </div>
  )
}

export default Booking