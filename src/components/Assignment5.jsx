import { useState } from "react";
import axios from "axios";
import {FaGithub} from "react-icons/fa"

function Assignment5(){
  const [data, setData] = useState('')
  const [click, setClick] = useState(false)
  const [name, setName] = useState('');

  const handleClick = async ()=>{
    try {
      const res = await axios.get(`https://api.github.com/users/${name}`)

      setData(res.data);
      setClick(!click);
    } catch (error) {
      alert(error.message + ": Please enter a valid username");
    }
  }

  return (
    <>
     <div className='flex flex-col items-center justify-center pt-28 bg-slate-400'>
        <button
          onClick={() => setClick(!click)}
          className='absolute font-bold text-black underline left-5 top-24'
        >
          Go Back
        </button>
        <h1 className='text-3xl font-bold'>Find Github info</h1>
        {!click ? (
          <div className='flex items-center w-full '>
            <div className='flex flex-row items-center justify-center w-full gap-4 py-20 '>
              <input
                className='border-2 border-black w-[40%] p-2'
                type='text'
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                placeholder='Enter the username '
                name='username'
              />
              <button
                onClick={handleClick}
                className='px-4 py-2 text-lg text-white bg-gray-950 hover:bg-gray-500 rounded-xl'
              >
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center w-full py-40'>
            <div className='max-w-lg mx-auto overflow-hidden rounded-lg shadow-xl bg-gradient-to-br from-blue-800 to-blue-400'>
              <div className='flex items-center gap-4 px-8 py-6'>
                <img
                  className='block border-4 border-white rounded-full h-36 w-36'
                  src={data.avatar_url}
                  alt='profile image'
                />
                <div className='flex flex-col justify-center'>
                  <p className='text-3xl font-semibold text-white'>
                    {data.name}
                  </p>
                
                  <a
                    className='text-white w-max'
                    href={data.html_url}
                    target='_blank'
                  >
                    <FaGithub size={34} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )

}

export default Assignment5;