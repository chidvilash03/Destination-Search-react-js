import './index.css'

const DestinationItem = props => {
  const {details} = props

  const {name, imgUrl} = details

  return (
    <li className="main-item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
