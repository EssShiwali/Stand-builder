'use client';
import { useState } from 'react';
import SlButton from '@shoelace-style/shoelace/dist/react/button';
import SlDialog from '@shoelace-style/shoelace/dist/react/dialog';

const Loginpopup = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
          <SlDialog label="Dialog" open={open} onSlAfterHide={() => setOpen(false)}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <SlButton slot="footer" variant="primary" onClick={() => setOpen(false)}>
              Close
            </SlButton>
          </SlDialog>
    
          <SlButton onClick={() => setOpen(true)}>Open Dialog</SlButton>
        </>
      );
    };

export default Loginpopup