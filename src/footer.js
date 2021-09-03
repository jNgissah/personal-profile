import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Call from '@material-ui/icons/Call';
import Email from '@material-ui/icons/Email';
import LocationOn from '@material-ui/icons/LocationOn';
import WhatsApp from '@material-ui/icons/WhatsApp';
import Pdf from './cv_joseph.pdf'
import  {
 
  Link
} from 'react-router-dom';


const useStyles=makeStyles((theme)=>({
    caro:{ 
        
      backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)",
      color:'black',
        padding:'50px',
       
    },
    back:{ 
    backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)",
//      backgroundColor:'black',
      color:'black',
        padding:'10px',
        fontSize:14
       
    }
}));




function Example(props){
    const classes=useStyles()
    return (
        
        <div className={classes.back}>
        <div className={classes.caro}>
        <Grid container spacing={8}>
        <Grid item xs={12} sm={5} md={5} >
         <h2 style={{textAlign:'left'}}> Ntori Joseph Ngissah</h2>
        <Grid container spacing={0} style={{textAlign:'left'}}>
      
       
I have a great interest in solving problems with code.
        </Grid>
        </Grid>
        <Grid item  xs={12} sm={3} md={3} >
    <h2 style={{textAlign:'left'}}> Quick Link</h2>
        
        
        <Grid container spacing={1} style={{textAlign:'center'}}>
        
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}}>
       <a href={Pdf} download>
        My CV
       </a>
         </Grid>
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}}>
         <Link to='/portfolio'>
        Portfolio
       </Link>
         </Grid>
        
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}}>
       <Link to='/Scientific_computation'>
        Scientific Computation
       </Link>
         </Grid>
        <Grid item xs={12} sm={12} md={12} style={{textAlign:'left', paddingTop:'6px'}}>
       <Link to='/Website_development'>
        Website Development
       </Link>
         </Grid>
        </Grid>
    
        </Grid>
        
        
        
        <Grid item  xs={12} sm={4} md={4} >
        <h2 style={{textAlign:'left'}}> Contact</h2>
        
        <Grid container spacing={1} style={{textAlign:'left'}}>
         <Grid item xs={2} sm={1} md={1} style={{textAlign:'right', paddingBottom:'0px'}}>
        <WhatsApp/>
         </Grid>
        <Grid item xs={9} sm={11} md={11} style={{textAlign:'left', paddingTop:'6px'}}>
        <a href="https://wa.me/+233268005074/?text=Hi there, Please send your message"> WhatsApp Chat</a>
         </Grid><Grid item xs={2} sm={1} md={1} style={{textAlign:'right', paddingBottom:'0px'}}>
        <Email/>
         </Grid>
        <Grid item xs={9} sm={11} md={11} style={{textAlign:'left', paddingTop:'6px'}}>
        <a href='mailto:jngissah@ravinlead.com'>jngissah@ravinlead.com</a>
         </Grid><Grid item xs={2} sm={1} md={1} style={{textAlign:'right', paddingBottom:'0px'}}>
        <Call/>
         </Grid>
        <Grid item xs={9} sm={11} md={11} style={{textAlign:'left', paddingTop:'6px'}}>
         <a href='tel:+233 550542370'>+233 550542370 </a>
         </Grid><Grid item xs={2} sm={1} md={1} style={{textAlign:'right', paddingBottom:'0px'}}>
        <LocationOn/>
         </Grid>
        <Grid item xs={9} sm={11} md={11} style={{textAlign:'left', paddingTop:'6px'}}>
         <a>Ghana</a>
         </Grid>
        </Grid>
    
        </Grid>
        
        

      </Grid>
 </div>
     <p style={{textAlign:'center', fontSize:11}}>
      Copyright 2021 JOSEPH NGISSAH NTORI all rights reserved <br/>
      Powered by <a  href="http://ravinlead.com">RavinLead Tech Hub</a>
</p>
        </div>
        
   
        
        
    

    )
}


export default Example


