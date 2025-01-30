import React from 'react'
import './ContactInfoCard.css'

const ContactInfoCard = ({iconUrl, text , link}) => {
  return (
    <a className='contact-details-card' href={link}>
        <div className='icon'>
            <img src = {iconUrl} alt = {text}></img>
        </div>

        <p>{text}</p>
    </a>
  )
}

export default ContactInfoCard