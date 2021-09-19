import React, {Component} from 'react';
import  './Header.css';
import { Button, Modal } from '@material-ui/core';
import PropTypes from 'prop-types';
import { FormControl } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Tabs } from '@material-ui/core';
import { Tab } from '@material-ui/core';

import { Typography } from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





const Header=(props)=>{
  const [value, setValue] = React.useState('one');
   const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);




    

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

   

    
        return <div className="header-main-container">
            <img id="logo-img" src='../../assets/logo.svg'/>

          

           <div id="book-btn">
           <Button onClick={handleOpen}  variant="contained" color="default" >Login</Button>
           <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="box-style">

        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="LOGIN" {...a11yProps(0)} />
          <Tab label="REGISTER" {...a11yProps(1)} />
         
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} centered>
        <form>
        <FormControl className="card-component" centered>
  
  <Input id="user-name-input" placeholder="Username*" centered />
 </FormControl>
 <br/>
 <br/>
 

 <FormControl className="card-component">
  
  <Input id="password-input" placeholder="Password*" />
 </FormControl>
 <br/>
 <br/>

 <Button  variant="contained" color="primary" centered>LOGIN</Button>
        </form>
           
        </TabPanel>




       <TabPanel value={value} index={1} centered>
        <form>
        <FormControl className="card-component" centered>
        <TextField
          error
          id="outlined-error-helper-text"
         
          placeholder="First Name *"
          
          helperText="Required"
        />
          
        </FormControl>

 <br/>
 <br/>
 

        <FormControl className="card-component" centered>
        <TextField
          error
          id="outlined-error-helper-text"
         
          placeholder="Last Name *"
          
          helperText="Required"
        />
        </FormControl>
 <br/>
 <br/>

 <FormControl className="card-component" centered>
 <TextField
          error
          id="outlined-error-helper-text"
         
          placeholder="Email *"
          
          helperText="Required"
        />
        </FormControl>
 <br/>
 <br/>


 <FormControl className="card-component" centered>
 <TextField
          error
          id="outlined-error-helper-text"
         
          placeholder="Password *"
          
          helperText="Required"
        />
        </FormControl>
 <br/>
 <br/>

 <FormControl className="card-component" centered>
 <TextField
          error
          id="outlined-error-helper-text"
         
          placeholder="Contact No *"
          
          helperText="Required"
        />
        </FormControl>
 <br/>
 <br/>

 <Button  variant="contained" color="primary" centered >REGISTER</Button>
        </form>
           
        </TabPanel>
      
    </Box>
      

          
        </Box>
      </Modal>

            <Button  variant="contained" color="primary" >Book Show</Button>

           </div>
           
        </div>;
    
}

export default Header;