import { BsPlusLg } from 'react-icons/bs';
import { useState } from 'react';

function Addnote() {
  const [spin, setSpin] = useState(true);

  const onSpin = () => {
    setSpin(!spin);
  };

  return (
    <div>
      <BsPlusLg
        className={
          spin === true
            ? 'text-3xl transition'
            : 'text-3xl rotate-45 transition'
        }
        onClick={onSpin}
      />

        {!spin && 
        <>
        <h1 className='transition'>hhdhdhd</h1>
        </>}

    </div>
  );
}

export default Addnote;
