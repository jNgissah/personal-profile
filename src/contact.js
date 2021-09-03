import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

//import Call from '@material-ui/icons/Call';
//import Email from '@material-ui/icons/Email';

import Para1 from './img/contact1.jpg';
import Leave from './leave'
import AOS from 'aos';
import "aos/dist/aos.css";
import Email from '@material-ui/icons/Email';
import Call from '@material-ui/icons/Call';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import Particles from 'react-tsparticles' 

import Cvmain from "./cv_joseph.pdf"




function Example(props){
      AOS.init({
    // initialise with other settings
    duration : 700
  });
//    const classes = useStyles();
    
    var items = [
        {
            name: "CONTACT ME",
            image: Para1,
            description: "we will respond to you as soon as possible"
        },
    ]


    return (
        <div>
        <Carousel swipe={true} touch={true} animation={"slide"} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>

    
 
            <h2 className="MuiTypography-h4"  style={{marginTop:40}} data-aos={"fade-up"}>Get In Touch</h2>
        <p className="MuiTypography-h6" style={{marginTop:'-29px'}}></p>
<br/>
<br/>

        <Grid container spacing={0} >
        <Grid item xs={12} sm={6} md={6}  >

        <h3 className="MuiTypography-h5" style={{marginTop:'20px',textAlign:'center'}} data-aos={"fade-up"}>My Contact</h3>

           <Grid item  xs={12} sm={12} md={12} >
        
        <Grid container spacing={1} style={{textAlign:'center'}}>
         
<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}}data-aos={"fade-up"}>
        <Email/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}}data-aos={"fade-up"}>
        <a href='mailto:jngissah@ravinlead.com'>jngissah@ravinlead.com</a>
         </Grid>         
<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}}data-aos={"fade-up"}>
        <Email/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}}data-aos={"fade-up"}>
        <a href='mailto:joengissah1@outlook.com'>joengissah1@outlook.com</a>
         </Grid>
    <Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <Call/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
        <a href='tel:+233 268005074'>+233 268005074 </a>
         </Grid>

 <Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <GitHub/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
        <a href='https://github.com/jNgissah/'>jNgissah</a>
         </Grid>


<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <LinkedIn/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
        <a href='https://www.linkedin.com/in/joseph-ngissah-0a6466127'>Joseph Ngissah</a>
         </Grid>


<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <Facebook/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
        <a href='https://www.linkedin.com/in/joseph-ngissah-0a6466127'>Joseph Ngissah</a>
         </Grid>


<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <Twitter/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
        <a href='https://www.linkedin.com/in/joseph-ngissah-0a6466127'>Joseph Ngissah</a>
         </Grid>

<Grid item xs={2} sm={2} md={2} style={{textAlign:'right', paddingBottom:'0px'}} data-aos={"fade-up"}>
        <Instagram/>
         </Grid>
        <Grid item xs={10} sm={10} md={10} style={{textAlign:'left', paddingTop:'6px'}} data-aos={"fade-up"}>
        <a href='https://www.linkedin.com/in/joseph-ngissah-0a6466127'>Joseph Ngissah</a>
         </Grid>



        </Grid>
    
        </Grid>
        
        <br/>
<br/>


         </Grid> 

        <Grid item xs={12} sm={6} md={6} style={{textAlign:'left', padding:15}}data-aos={"fade-up"}>

        <h3 className="MuiTypography-h5" style={{marginTop:'10px',textAlign:'center'}} data-aos={"fade-up"}>Leave A Message</h3>
        <p className="MuiTypography-h6" style={{marginTop:'-29px'}}></p>
<br/>
            <p style={{marginBottom:80}}>
           <Leave/>
            </p>
            
            
            
         </Grid>
        </Grid>
            


    </div>

      
    )
}

function Item(props)



{
    return (
        
       <div>
<div style={{position:"absolute", width:"100%",zIndex:"1"}}>

<h1 style={{color:"black", fontSize:"32px", marginTop:"18%", textAlign:"center", zIndex:"1"}} data-aos={"flip-right"}><span style={{ paddingLeft:12, paddingRight:12, backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)"}}>{props.item.name} </span></h1>
          
<a href={Cvmain} download ><Button style={{backgroundImage:"linear-gradient(315deg, #D29E00 0%,  #FFDE3B 74%)", color:"white",zIndex:1}}>
Download CV
</Button>
</a>






          
</div>

             <Particles style={{position:"", height:"100%", width:"200%", backgroundColor:"red"  }} className={"contact"}
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "",
            },
        
          },

          fpsLimit: 30,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 0.5,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 10,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#C39300", "#D5A100", "#FFDE3B"]
            },
            links: {
              color: "#FFDE3B",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 0.5,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 900,
              },
              value: 100,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
            
            
        
        
        </div>
        
        
     

    )
}


export default Example


