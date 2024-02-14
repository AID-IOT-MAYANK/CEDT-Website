import React, { useEffect } from "react"
import "./AluminiSection.css"
import AluminiCard from "./AluminiCard"
import AOS from "aos"
import "aos/dist/aos.css"
import photo_1 from "./assets/photo_1.jpeg"
import photo_2 from "./assets/photo_2.jpeg"
import photo_3 from "./assets/photo_3.jpeg"
import photo_4 from "./assets/photo_4.jpeg"

const AluminiSection = () => {
  const alums = [
    {
      title: "Alumnus 1",
      // image: "https://placehold.co/600x400",
      image: photo_1,
      link: "http://example.com/project1",
    },
    {
      title: "Alumnus 2",
      // image: "https://placehold.co/600x400",
      image: photo_2,
      link: "http://example.com/project2",
    },
    {
      title: "Alumnus 3",
      // image: "https://placehold.co/600x400",
      image: photo_3,
      link: "http://example.com/project3",
    },
    {
      title: "Alumnus 4",
      image: photo_4,
      link: "http://example.com/project4",
    },
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })

  return (
    <div className="alumini-container">
      <h2 className="alumini-heading" data-aos="fade-up">
        Alumini
      </h2>
      <div className="card-container" data-aos="fade-right">
        {alums.map((alumini, index) => (
          <AluminiCard
            key={index}
            title={alumini.title}
            image={alumini.image}
            link={alumini.link}
          />
        ))}
      </div>
    </div>
  )
}

export default AluminiSection
