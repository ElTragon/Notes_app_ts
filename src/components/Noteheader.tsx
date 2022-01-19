
import { MdNotes} from 'react-icons/md'
import { Link } from 'react-router-dom'

interface  AppProps  {
    title: string
  }
  
  function Noteheader() {
    // const title_:AppProps = {
    //   title: 'My Notes'
    // }
    // <div className='container mx-auto'>
    //       <h2 className='text-3xl'> <MdNotes className='inline pr-2 text-5xl' />Notes
    //         <div className=' inline align-right'>
    //           jsjsjs
    //       </div>
    //         </h2>
    //       </div> >
    //     </div>
 
    return (

      <div className='grid grid-cols-4 px-1 mx-2 '>
            <div className=' col-span-3  align-right'>
            <h2 className='text-3xl'> <MdNotes className='inline pr-2 text-5xl' />Notes
             
      </h2>

   
              
            </div>
            <p className=' col-auto text-3xl text-right ' >
                6 notes
              </p>
          </div>
   
      // <div className=''>
      // <div className=' px-2 mx-2'>
      
      //       <h2 className='text-3xl'> <MdNotes className='inline pr-2 text-5xl' />Notes
      //       <div className=' inline align-right'>
      //         jsjsjs
      //     </div>
      //       </h2>
      //     </div> 
      //     {/* <div className='flex-start px-2 mx-2'>
      //      jsjsjs
      //     </div> */}
  
      //     <div className=' px-2 m-2'>
           
      //   </div>
      // </div></>
    );
  }
  
  export default Noteheader;
  