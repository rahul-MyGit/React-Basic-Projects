function Assignment1() {
  return (
    <>
     <div className='flex items-center justify-center w-screen h-screen bg-slate-400 '>
      <div className='shadow-lg shadow-white w-max'>
        <div className='relative flex flex-col justify-between h-96 w-96'>
          <img
            src='https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg'
            className='absolute inset-0 object-cover m-auto border-4 border-white rounded-full w-36 h-36'
          />

          <img
            src='https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_1280.jpg'
            className='h-[50%] object-cover bg-cyan-200'
          ></img>
          <div className='flex flex-col items-center justify-end h-full py-4 bg-white'>
            <div>
              <h2 className='font-bold'>
                Rahul Gujjar<span className='font-semibold opacity-50 '> 22</span>
              </h2>
              <p className='opacity-60 flex justify-center'>Haryana</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='flex items-center justify-around py-4 bg-white'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>10K</h2>{' '}
            <p className='text-sm opacity-50'>Followers</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>300K</h2>{' '}
            <p className='text-sm opacity-50'>Likes</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>400</h2>{' '}
            <p className='text-sm opacity-50'>Photos</p>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Assignment1