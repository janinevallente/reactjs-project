import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {

  const [entry, setEntry] = useState([]);
  useEffect(()=>{
    axios.get('https://api.publicapis.org/entries')
    .then(response=>{
      console.log(response.data.entries);
      setEntry(response.data.entries);
    })
  },[]);

  return (         
    <div className="content">
      <center>
       <img src="./gamehub-icon.png"/>
       </center>
        <h1>Welcome to GamingHub</h1>
        <p>Discover the latest games, read reviews, and connect with other gamers.</p>
    </div>   
  )
}

export default Home