import React from "react"
import Tour from "./Tour"
const Tours = ({ tour, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tour.map((t) => {
          return <Tour removeTour={removeTour} key={t.id} {...t} />
        })}
      </div>
    </section>
  )
}

export default Tours
