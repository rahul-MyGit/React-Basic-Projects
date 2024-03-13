import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <div className='fixed top-0 z-10'>
        <div className='flex justify-between w-screen px-8 py-4 text-lg font-bold text-black bg-slate-100 h-max'>
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>Week 7 All Assignment</Link>
        </div>
    </div>
  )
}