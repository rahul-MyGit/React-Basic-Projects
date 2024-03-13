// UseEffect, useRef and useCallback
// useCallback(fn, dependency) -> its a hook that lets you cache a function definition between re-renders.
// useEffect(setup, dependencies) -> its a hook that lets you synchronize a component with an external system 
// useRef : used to take referance of something

import { useState, useCallback, useEffect, useRef } from 'react'

function Assignment3() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook
  const passwordRef = useRef(null)

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,100);  //select only 3 value
    window.navigator.clipboard.writeText(password)
  }, [password])   // can give empty [] .

  const passwordGenerator = useCallback(()=>{    //use for optimization
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number)  str += "0123456789"
    if (character)  str += "!@#$%^&*_-+={}[]~`"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length,number,character, setPassword]);  //may not use setPassword, if used password then it will run infinite

  useEffect(()=>{   //use for run till now
    passwordGenerator()
  },[length,number,character,passwordGenerator])

  return (
    <>
    <div className='h-screen w-full bg-fuchsia-300'>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-9 py-3 text-orange-500 bg-gray-700 mt-16'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'> 

      <input type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />

      <button onClick={copyPassword} className='outline-none bg-blue-500 hover:bg-blue-700 active:bg-blue-900 text-white px-3 py-0.5 shrink-0'
      >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label> Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>

          <input type="checkbox"
          defaultChecked = {number}
          id='numberInput'
          onChange={()=>{
            setNumber((prev) => !prev);
          }}
          />

          <label htmlFor="numberInput"> Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>

          <input type="checkbox"
          defaultChecked = {character}
          id='characterInput'
          onChange={()=>{
            setCharacter((prev) => !prev);
          }}
          />
          <label htmlFor="characterInput">Character</label>
          </div>

      </div>
    </div>
    </div>
    </>
  )
}

export default Assignment3