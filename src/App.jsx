import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Tours from "./Tours"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project"
function App() {
  const [loading, setLoading] = useState(true),
    [tour, setTour] = useState([]),
    fetchTours = async () => {
      setLoading(true)
      try {
        const response = await fetch(url),
          tours = await response.json()

        setTour(tours)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    },
    removeTour = (id) => {
      setTour(tour.filter((t) => t.id !== id))
    }

  useEffect(() => {
    fetchTours(url)
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tour.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tour={tour} removeTour={removeTour} />
    </main>
  )
}

export default App
