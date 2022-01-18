import {CgNotes} from 'react-icons/cg'
import { Link } from 'react-router-dom'

interface  AppProps  {
    title: string
  }

function Navbar(props: AppProps) {
    const {title} = props
    return (
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
        <div className='container mx-auto'>
          <div className='flex-none px-2 mx-2'>
            <CgNotes className='inline pr-2 text-3xl' />
            {title}
            {/* <Link to='/' className='text-lg font-bold align-middle '>
              
            </Link> */}
          </div>
  
          <div className='flex-1 px-1 mx-2'>
            <div className='flex justify-end'>
              {/* <Link className='btn btn-ghost btn-sm rounded-btn' to='/'>
                Home
              </Link>
              <Link className='btn btn-ghost btn-sm rounded-btn' to='/about'>
                About
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar
