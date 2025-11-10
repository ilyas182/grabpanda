import { Link } from 'react-router-dom'
import grabpanda from '../../../public/grabpanda.png'

export default function Navbar() {
  return (
    <>
    {/* <div className="flex flex-row w-full h-16 justify-center"> */}
    <div className='grid grid-cols-10 h-16 w-full font-bold text-lg flex items-center'>
    {/* <div className="h-16 bg-white pl-4"> */}
        <img src={grabpanda} alt="GrabPanda" className=" h-full object-contain items-start" />
    {/* </div> */}
    {/* <div className="flex align-center w-full justify-center gap-4 items-center bg-white font-bold text-lg "> */}
        <Link className="col-start-4" to="/">Home</Link> 
        <Link className="col-start-5" to="/menu">Menu</Link>
        <Link className="col-start-6" to="/about">About</Link>
        <Link className="col-start-7" to="/order">Order</Link> {/* TODO create Order component  */}
    {/* </div> */}
    </div>
    </>
    
  )
}