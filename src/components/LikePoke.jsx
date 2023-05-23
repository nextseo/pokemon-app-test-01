import React, {useState} from 'react'
import {FaHeart, FaRegHeart, FaTrashAlt} from 'react-icons/fa'

const LikePoke = ({toggleDelete, setname, testname}) => {
    const [like, setLike] = useState(false)

    const toggleLike = ()=>{
        setLike((data)=> !data)
    }

    const test = ()=>{
        toggleDelete(testname)
    }

   
  return (
    <div>
        <button className='mr-4 mt-10 mt-6 bg-transparent  text-white font-semibold  py-2 px-4 border border-white  rounded' onClick={toggleLike}>
            {like ? <FaHeart style={{color:'red'}}/> : <FaRegHeart/>}
        </button>
        <button className='mr-4 mt-10 mt-6 bg-transparent  text-white font-semibold  py-2 px-4 border border-white  rounded' onClick={test}>
         <FaTrashAlt style={{color:'white'}}/> 
        </button>

        
        

    </div>
  )
}

export default LikePoke