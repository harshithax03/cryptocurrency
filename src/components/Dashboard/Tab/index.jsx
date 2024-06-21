import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Grid } from '../Grid';
import "./style.css"



export const TabFeature = ({ data }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--black)",
    selected: "var(--purple)",
    width: "50vw",
    fontSize: "1.1rem",
    fontWeight: 500,
    fontFamily: "var(--inter)",
    textTransform: 'capitalize',
    tab: {
      '&.Mui-selected': {
        color: 'var(--grey)',
      },

    }
  }


  return (
    <div>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant='fullWidth' sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: 'var(--black)',
          },
        }}>
          <Tab label='Grid' value="1" sx={{ ...style.tab, ...style }} />
          <Tab label='List' value="2" sx={{ ...style.tab, ...style }} />
        </TabList>

        <TabPanel value='1'>
          <div className='grid-container'>
            {data.map((coin , i) => (
             <Grid info={coin}  key={i}/>
            ))}
          </div>

        </TabPanel>
        <TabPanel value='2'>List</TabPanel>
      </TabContext>
    </div>
  );
}
