import React from 'react'

// Components
import LikePoke from './LikePoke'

const FavPoke = ({fav}) => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
       

        {fav?.map((data, index)=>{
           return (
            <div key={index}>
            <h3>{data?.name}</h3>
            <img src={data?.sprites?.other?.home?.front_default} alt="" />
            <LikePoke/>
        </div>
           )
        })}
    </div>
  )
}

export default FavPoke