import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Card, Button } from "react-bootstrap"
import Naavbar from "../component/Naavbar"
import "./Booking.css"

const Booking = () => {

  const { id } = useParams()

  const [data, setData] = useState([])
  const [guests, setGuests] = useState(1)
  const [Time, setTime] = useState([])
  const [Name, setName] = useState([])
  const navigate = useNavigate();

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


  const addGuests = () => {
    setGuests((prev) => prev + 1)
  }

  const decreaseGuests = () => {
    setGuests((prev) => (prev > 1 ? prev - 1 : 1))
  }


  if (!data) {
    return (
      <h3 style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        Loading...
      </h3>
    )
  }
  

  return (
    <>

      <Naavbar />
<div className="bottom-space">
  
</div>
      <div className="bookingbackground">

        <Card className="cardstyle">

          <Card.Body>

            <Card.Title className="cardtitle">
              {data.restaurantName}
            </Card.Title>

            <Card.Text>
              <strong>Address:</strong> {data.address}
            </Card.Text>

            <Card.Text>
              <strong>Type:</strong> {data.type}
            </Card.Text>

            <Card.Text>
              <strong>Parking:</strong>{" "}
              {data.parkingLot ? "Available" : "Not Available"}
            </Card.Text>

            {/* Guest Counter */}

            <div className="guestcounter">

              <strong>No of Guests</strong>

              <div className="counterrow">

                <button
                  className="counterbutton"
                  onClick={decreaseGuests}
                >
                  -
                </button>

                <span className="guestnumber">
                  {guests}
                </span>

                <button
                  className="counterbutton"
                  onClick={addGuests}
                >
                  +
                </button>

              </div>

            </div>
            <div className="bookinginput">

  <label><strong>Your Name</strong></label>
  <input
    type="text"
   value={Name}
    onChange={(e) => setName(e.target.value)}
    placeholder="Enter your name"
    className="inputstyle"
  />

  <label style={{marginTop:"10px"}}><strong>Booking Time</strong></label>
  <input
    type="time"
    value={Time}
    onChange={(e) => setTime(e.target.value)}
    className="inputstyle"
  />

</div>


            <Button style={{paddingTop:'10px'}}
             onClick={() => {

  if(!Name || !Time){
    alert("Please enter name and booking time")
    return
  }

  alert(
    `Booking Confirmed!

Name: ${Name}
Restaurant: ${data.restaurantName}
Guests: ${guests}
Time: ${Time}`
  )
  navigate("/login")
}}>
              Confirm Booking
            </Button>

          </Card.Body>

        </Card>

      </div>
    </>
  )
}

export default Booking