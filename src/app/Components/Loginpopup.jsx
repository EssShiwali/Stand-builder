'use client';
import { useState } from 'react';
import SlDialog from '@shoelace-style/shoelace/dist/react/dialog';
import './Navbar.css'

const Loginpopup = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
          <SlDialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     
          </SlDialog>
  <button className='sign-in' onClick={() => setOpen(true)}>Sign in</button>
       
        </>
      );
    };

export default Loginpopup