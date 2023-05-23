import React, { useState } from 'react'

// Components
import LikePoke from './LikePoke'

const FavPoke = ({fav, setFav}) => {
  const [name, setname] = useState("")

  const toggleDelete = (testname)=>{
    // fav.map((data)=>(
    //   alert(data.name)
    // ))
    setFav(fav => fav.filter((entry) => entry.name !== testname));
   
}

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
       

        {fav?.map((data, index)=>{
           return (
            <div key={index}>
            <h3 className='text-white'>{data?.name}</h3>
            <img src={data?.sprites?.other?.home?.front_default} alt="" />
            <LikePoke  toggleDelete={toggleDelete} testname={data.name} setname={setname} />
        </div>
           )
        })}
    </div>
  )
}

export default FavPoke