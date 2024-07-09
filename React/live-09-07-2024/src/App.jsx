import { useEffect, useState } from 'react'
import './App.css'
import { Form } from './components/Form'
import { List } from './components/List'

function App() {
  const [reviews, setReviews] = useState([])

  function addReview (review) {
    setReviews([...reviews, review])
  }

  useEffect(() => {
    console.log(reviews)
  }, [reviews])

  return (
    <div className='body'>
      <div className='flex flex-col items-center'>
        <div className='flex flex-col gap-8'>
      <Form addReview={addReview}/>
      <List reviews={reviews}/>
      </div>
      </div>
    </div>
  )
}

export default App
