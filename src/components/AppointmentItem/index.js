// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {Appointment} = props
  const {id, title, date, isStarred} = Appointment
  const imageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="listEle">
      <div className="title-imageContainer">
        <h1>{title}</h1>
        <img src={imageUrl} alt="" />
      </div>
      <p>{date}</p>
    </li>
  )
}

export default AppointmentItem
