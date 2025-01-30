import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard'
import ContactForm from './ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div className = "contact-info-card" style = {{flex: 1}}>
                <ContactInfoCard
                iconUrl = "./assets/images/linkedinIcon.png"
                text= "LinkedIn"
                link = "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFOiz_h6qKzVQAAAZS4fJko7Bhs2Zu3CwagjgwEqi1neEXo-RIrt5hWMqzXKvm1s1YCllDVBSLzII3MS9B9umZhyiUJbCOwjG35KCRgDRUZHU6zVpeuZGiWsSx3irDVxsjqGcQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fpriyanshi-gupta-93750b230%2F"
                />
                
                <ContactInfoCard
                iconUrl = "./assets/images/githubIcon.png"
                text= "Github"
                link = "https://github.com/priyanshi226"
                />
            </div>
            
            <div style = {{flex: 1}}>
                <ContactForm/>
            </div>
            </div>
    </section>
  )
}

export default ContactMe