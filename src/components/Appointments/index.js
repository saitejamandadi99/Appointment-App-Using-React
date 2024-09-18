import {v4 as uuidv4} from 'uuid'

import {format} from 'date-fns'

import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {AppointmentList: [], title: '', date: '', isStarredBtnClicked: false}

  // Function to toggle the starred state of an appointment
  toggleIsStarred = id => {
    this.setState(prevState => ({
      AppointmentList: prevState.AppointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          // Toggle the isStarred property of the matching appointment
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  // Function to add a new appointment
  onAddAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state

    // Check if title and date are provided
    if (title && date) {
      const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
      const newAppointment = {
        id: uuidv4(), // Generate a unique ID for the new appointment
        title,
        date: formattedDate,
        isStarred: false, // Initialize isStarred to false
      }

      // Update the AppointmentList state with the new appointment
      this.setState(prevState => ({
        AppointmentList: [...prevState.AppointmentList, newAppointment],
        title: '', // Reset title input
        date: '', // Reset date input
      }))
    }
  }

  // Update title in the state
  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  // Update date in the state
  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  // Function to toggle the starred button
  onClickStarredBtn = () => {
    this.setState(prevState => ({
      isStarredBtnClicked: !prevState.isStarredBtnClicked,
    }))
  }

  // Function to display the list of appointments (either all or only starred)
  appointmentListDisplay = () => {
    const {AppointmentList, isStarredBtnClicked} = this.state
    const filteredList = isStarredBtnClicked
      ? AppointmentList.filter(eachApt => eachApt.isStarred)
      : AppointmentList

    return filteredList.map(eachAppointment => (
      <AppointmentItem
        Appointment={eachAppointment}
        key={eachAppointment.id}
        toggleIsStarred={this.toggleIsStarred} // Pass toggle function to AppointmentItem
      />
    ))
  }

  render() {
    const {title, date, isStarredBtnClicked} = this.state
    return (
      <div className="appContainer">
        <div className="appointmentContainer">
          <div className="inputAndImgContainer">
            <div className="inputContainer">
              <h1 className="headingEle">Add Appointment</h1>
              <form className="formContainer" onSubmit={this.onAddAppointment}>
                <label htmlFor="input" className="labelEle">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  id="input"
                  className="inputEle"
                  value={title}
                  onChange={this.onChangeTitle}
                />
                <label htmlFor="date" className="labelEle">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="inputEle"
                  value={date}
                  onChange={this.onChangeDate}
                />
                <button type="submit" className="addBtn">
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
            <button
              type="button"
              className="starredBtn"
              onClick={this.onClickStarredBtn}
            >
              {isStarredBtnClicked ? 'Show All' : 'Show Starred'}
            </button>
          </div>
          <ul className="listContainer">{this.appointmentListDisplay()}</ul>
        </div>
      </div>
    )
  }
}

export default Appointments
