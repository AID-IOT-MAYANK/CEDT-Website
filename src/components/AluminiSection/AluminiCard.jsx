import React from "react"
import "./AluminiSection.css"

const AluminiCard = ({ title, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={link}>View More</a>
    </div>
  )
}

export default AluminiCard
