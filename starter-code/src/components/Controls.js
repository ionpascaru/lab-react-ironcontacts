import React from 'react'
import './ContactList.css'

const Controls = ({ onClickSortContacts, onClickRandomContact, sortedBy }) => {
  return (
    <div className="btn-group mb-4" role="group" aria-label="Basic example">
      <button
        type="button"
        className="btn btn-secondary"
        onClick={onClickRandomContact}
      >
       + Add Random Contact
      </button>

      <button
        type="button"
        className={"btn btn-secondary " + (sortedBy === 'name' && 'active')}
        onClick={() => onClickSortContacts('name')}
      >
        Sort by Name
      </button>

      <button
        type="button"
        className={"btn btn-secondary " + (sortedBy === 'popularity' && 'active')}
        onClick={() => onClickSortContacts('popularity')}
      >
        Sort by Popularity
      </button>
    </div>
  )
}

export default Controls