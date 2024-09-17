// Write your code here
import {Component} from 'react'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {AppointmentList: []}
  render() {
    const {AppointmentList} = this.state
    return (
      <div className="appContainer">
        <div className="appointmentContainer">
          <div className="inputAndImgContainer">
            <div className="inputContainer">
              <h1 className="headingEle">Add Appointment</h1>
              <form className="formContainer">
                <label htmlFor="input" className="labelEle">
                  Title
                </label>
                <input
                  type="input"
                  placeholder="Title"
                  id="input"
                  className="inputEle"
                />
                <label htmlFor="date" className="labelEle">
                  Date
                </label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  id="date"
                  className="inputEle"
                />
                <button type="button" className="addBtn">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="image"
            />
          </div>
          <hr className="hr" />
          <div className="appointments-starred-container">
            <h1 className="headingEle">Appointments</h1>
            <button type="button" className="starredBtn">
              Starred
            </button>
          </div>
          <ul className="listContainer">
            {AppointmentList.map(eachAppointment => (
              <AppointmentItem
                Appointment={eachAppointment}
                key={eachAppointment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
