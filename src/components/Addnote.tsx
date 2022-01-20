import { BsPlusLg } from 'react-icons/bs';
import { useState } from 'react';

function Addnote() {
  const [spin, setSpin] = useState(true);
  const [note, setNotes] = useState({});

  const handleSpin = () => {
    setSpin(!spin);
  };


  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
    console.log('hello')
  }

  type ButtonProps = {

  }

  return (
      <>
    <div className='flex justify-end'>
      <BsPlusLg
        className={
          spin === true
            ? 'text-3xl transition' 
            : 'text-3xl rotate-45 justify-end transition'
        }
        onClick={handleSpin}
      /></div>
<div className='flex justify-center'>
        {!spin && 
        <>
        <h1 className='transition'>hhdhdhd</h1>
        <form onSubmit={e => {handleSubmit(e)}}>
            <input type="text" placeholder='Note Title' id="title" />

            <input type="text" placeholder='Note details' id="note details"/>



<button type='submit' >
            Send
          </button>
        </form>

        
        </>}</div>
</>
    
  );
}

export default Addnote;
