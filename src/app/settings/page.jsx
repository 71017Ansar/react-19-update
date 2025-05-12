import React from 'react'




const MyCard = () => {
  return (
    <div>
      <h1>My Card</h1>
      <p>This is a card component.</p>
    </div>
  )
}


const page = () => {
  return (
    <div>Settings Page
      
      <MyCard />
    </div>
  )
}

export default page