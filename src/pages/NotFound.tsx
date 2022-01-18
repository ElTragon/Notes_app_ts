import { GoHome } from 'react-icons/go'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='hero'>
            <div className="text-center hero_content">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold mb-6">Opps!!</h1>
                    <p className="text-3xl mb-8">404 - Page not found!</p>
                    {/* <Link to='/' className='btn btn-primary btn-md'> */}
                        <div className='btn btn-primary btn-md'>
                        <GoHome className='mb-2'/>
                        Back to Home</div>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default NotFound
