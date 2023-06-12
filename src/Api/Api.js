import React, { useState, useEffect } from "react";
import './Api.css'

const Api = () => {
    const [reviews, setreviews] = useState([])

    const fetchreviewData = () => {
      fetch("http://localhost:1337/api/reviews")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setreviews(data.data)
          console.log(data.data)
        })
    }
  
    useEffect(() => {
      fetchreviewData()
    }, [])
  
  return (
    <div className="backend">
              <br/><br/>
              <h1 >Data from strapi CMS</h1>
              <br/><br/>
              <div>
      {reviews.length > 0 && (
        <div className="listwrap">
          {reviews.map(review => (
            <div className="list" key={review.id}>
              <h3>{review.attributes.Title} <span>*{review.attributes.Rating}</span></h3>
              <p>{review.attributes.body}</p>
              
            </div>
          ))}
        </div>
        
      )}
    </div>
    <br/><br/><br/><br/><br/><br/>
              
        </div>
  )
}

export default Api




