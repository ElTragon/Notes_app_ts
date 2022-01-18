import { GoHome } from 'react-icons/go'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='text-center'>
            <h1 className="text-6xl mb-4">Notes App</h1>
            <p className="mb-2 text-2xl font-light">A Note taking app made with React, Typescipt, and TailwindCSS</p>
            <Link to='/' className='btn btn-primary btn-md '>
                        <GoHome className='text-2xl mr-2' />
                       
                        Back to Home
                    </Link>
        </div>
    )
}

export default About
