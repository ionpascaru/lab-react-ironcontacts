import React from 'react'
import './ContactItem.css'

const ContactItem = ({
  name,
  pictureUrl,
  popularity,
  id,
  onClickDelete
}) => (
  <div className="FilmItem card" id={id} style={{ maxWidth: '18rem' }}>
    <i className="fa fa-times text-danger delete-film" onClick={onClickDelete} />

    <img className="card-img-top" src={pictureUrl} alt={name} />

    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{popularity}</p>
    </div>


  </div>
)

export default ContactItem