import { Link } from 'react-router-dom'
import grabpanda from '../../../public/grabpanda.png'

export default function Navbar() {
  return (
    <>
    <div className="h-16 bg-white">
        <img src={grabpanda} alt="GrabPanda" className="w-full h-full object-contain" />
    </div>
    <div className="flex align-center w-full justify-center gap-4 items-center bg-white font-bold text-lg">
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
        <Link to="/order">Order</Link> {/* TODO create Order component  */}
    </div>
    </>
    
  )
}