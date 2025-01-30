import React from 'react'
import './SkillCard.css'

const SkillCard = ({title, iconUrl, isActive, selectSkill}) => {
  return (
    <div
    className={`skills-card ${isActive ? "active" : ""}`}
    onClick = {selectSkill}
    >
    <div className='skill-icon'>
        <img className='icons' src = {iconUrl} alt = {title}/>
    </div>

    <span>{title}</span>
    </div>
    )
}

export default SkillCard