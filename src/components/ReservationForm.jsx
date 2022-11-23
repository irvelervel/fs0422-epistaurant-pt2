import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

// a reservation object is made like this:
// {
// name: // string, required
// phone: // string || number, required
// numberOfPeople: // string || number, required
// smoking: // boolean, required
// dateTime: // string, required
// specialRequests: // string
// }

class ReservationForm extends Component {
  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: 1,
      smoking: false,
      dateTime: '',
      specialRequests: '',
    },
  }

  render() {
    return (
      <div>
        <h2>Book your table NOW!</h2>
        <p>Seats are limited ;)</p>
        <Form>
          <Form.Group>
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              placeholder="The name of the res. holder"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Your phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="The phone of the res. holder"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>How many are you?</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Check type="checkbox" label="Do you smoke?" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Date and time of your res.</Form.Label>
            <Form.Control type="datetime-local" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Any special request?</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send reservation
          </Button>
        </Form>
      </div>
    )
  }
}

export default ReservationForm
