import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import "./style.css"


export default function AnchorTemporaryDrawer() {
    const [open, setOpen] = useState(false);
  

  return (
    <div>
          <IconButton onClick= {()=> setOpen(true)}>
            <MenuRoundedIcon />
          </IconButton>
          <Drawer
            anchor={'right'}
            open={open}
            onClose={()=>setOpen(false)}
          >
           <div className='menu'>
            <p>Home</p>
            <p>Dashboard</p>
            <p>Compare</p>
           </div>
          </Drawer>
    </div>
  );
}
