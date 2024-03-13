import { useRef, useState } from 'react'

function Assignment6() {

  const [number, setNumber] = useState();
  const [click, SetClick] = useState(false);
  const [otp, setOtp] = useState(['','','','']);

  const inputRef = [useRef(), useRef(), useRef(), useRef()];

  const handleClick = ()=>{
    if(number.length === 10){
      SetClick(true);
    }else{
      alert("Enter the 10 digit number")
    }
  }

  const handleInput = (index, value)=>{
    if(!isNaN(value) && value != ''){
      const curOtp = [...otp];
      curOtp[index]=value;

      setOtp(curOtp);

      if(index < otp.length - 1){
        inputRef[index + 1].current.focus();
    }
  }
}
  return (
    <div className='flex items-center justify-center w-full h-screen bg-gray-800'>
    {/* Conditional rendering based on the clicked state */}
    {!click ? (
      <div className='py-20 bg-gray-900 border-white border-[1px] rounded-xl w-[30%]'>
        <div className='flex flex-col items-center justify-center gap-10'>
          <h2 className='text-4xl font-bold text-white'>Login with OTP</h2>
          <div className='flex flex-col justify-center items-center w-[80%] gap-4 px-6'>
            {/* Input field for entering the phone number */}
            <input
              type='number'
              value={number}
              className='w-full px-4 py-2 bg-gray-900 border-[1px] border-white text-white'
              placeholder='Enter your mobile number'
              onChange={(e) => setNumber(e.target.value)}
            />
            {/* Button for sending OTP */}
            <button
              onClick={handleClick}
              className='text-white border-white border-2 w-[40%] py-2 text-lg rounded-2xl bg-slate-800 hover:bg-slate-600'
            >
              Send OTP
            </button>
          </div>
        </div>
      </div>
    ) : (
      <div className='py-20 bg-gray-900 border-white border-[1px] rounded-xl w-[30%]'>
        <div className='flex flex-col items-center justify-center gap-10'>
          <h2 className='text-4xl font-bold text-white'>Enter the OTP</h2>
          <div className='flex items-center justify-center gap-4'>
            {/* Mapping over the otp array to render OTP input fields */}
            {otp.map((value, index) => (
              <input
                key={index}
                ref={inputRef[index]}
                type='number'
                className='bg-inherit border-[1px] border-white text-white rounded-lg p-2 text-center'
                value={value}
                onChange={(e) => handleInput(index, e.target.value)}
                min='0'
                max='9'
              />
            ))}
          </div>
          {/* Button for submitting OTP */}
          <button
            onClick={handleClick}
            className='text-white border-white border-2 w-[40%] py-2 text-lg rounded-2xl bg-slate-800 hover:bg-slate-600'
          >
            Login
          </button>
        </div>
      </div>
    )}
  </div>
  )
}

export default Assignment6