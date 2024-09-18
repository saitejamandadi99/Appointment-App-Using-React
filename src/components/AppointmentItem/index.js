// Import CSS for styling
import './index.css'

// Functional component to display each appointment
const AppointmentItem = props => {
  const {Appointment, toggleIsStarred} = props // Destructure props
  const {id, title, date, isStarred} = Appointment // Destructure appointment properties

  // Function to handle the click event for the star button
  const onClickStarred = () => {
    toggleIsStarred(id) // Call the toggle function passed from parent with the appointment id
  }

  // Determine the image URL based on whether the appointment is starred
  const imageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png' // Filled star for starred appointments
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png' // Empty star for unstarred appointments

  return (
    <li className="listEle">
      <div className="title-imageContainer">
        <p>{title}</p> {/* Display the title of the appointment */}
        <button
          type="button"
          className="button"
          data-testid="star" // Use data-testid for testing purposes
          onClick={onClickStarred} // Set the onClick event to handle star toggle
        >
          <img src={imageUrl} alt="star" />{' '}
          {/* Display the appropriate star image */}
        </button>
      </div>
      <p>{date}</p> {/* Display the date of the appointment */}
    </li>
  )
}

export default AppointmentItem // Export the component
