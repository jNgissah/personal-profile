import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Image from './img/Engaging-an-AC-Compressor-Clutch.jpg'
import {makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';
import Para1 from './img/img/img9.jpeg';
import Cvmain from "./cv_joseph.pdf"

import Atiefoo from './img/port/atiefo.PNG';
import Zf1 from './img/port/zf1.PNG';
import AM from './img/port/3am.PNG';
import Jsk from './img/port/jsk2.PNG';
import Shop from './img/port/shopon.PNG';
import Book from './img/port/book.PNG';
import AOS from 'aos';
import "aos/dist/aos.css";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Public from '@material-ui/icons/Public';
import GitHub from '@material-ui/icons/GitHub';

import Particles from 'react-tsparticles' 






const useStyles=makeStyles((theme)=>({

    
  imageList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
    
    
    
    caro:{ 
        
        backgroundRepeat: 'no-repeat', 
        backgroundImage: `url(${Image})`,
        backgroundSize:'cover',
        backgroundPosition:'center',  
        [theme.breakpoints.up('xs')]: {
        height:240,
            paddingTop: '15%'
    },   
      [theme.breakpoints.up('sm')]: {
      height:550,
          paddingTop: '15%'
         
    }
    },
    
    
    root: {
    maxWidth: '100%',
  },
  media: {
       maxWidth: '100%',
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));





function Example(props)

{
     AOS.init({
    // initialise with other settings
    duration : 700
  });
//    const classes = useStyles();
    const classes = useStyles();
     
    
  var items = [
        {
            name: "My Portfolio",
            image: Para1,
            description: "We provide the best biomass wood pellet"
        }
      ]

    return (
        <div>
        <Carousel swipe={true} touch={true} animation={"slide"} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>

    <br/>
    <br/>


   <Container  maxWidth="lg" style={{textAlign:"left"}}>
    
   <h2 className="MuiTypography-h5" style={{textAlign:"Center"}} data-aos="fade-up">
        <b> My Portfolio </b>
            </h2> 



    
   <Grid container spacing={3} style={{marginBottom:80}}>
       <Grid item lg={3} sm={12} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

           <Card className={classes.root} style={{backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)"}}>
      <CardHeader
       
       
        
        subheader="Business Website"
      />
      <CardMedia
        className={classes.media}
        image={Atiefoo}
        title="Atiefoo"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        React website for Atiefoo Express with database management system
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a href="https://www.zf1logistics.com"><Public/>  </a>
        </IconButton>
        <IconButton aria-label="share">
         <a href=""> <GitHub /> </a>
        </IconButton>
        
      </CardActions>
      
    </Card> 
            
           
            </Grid>




<Grid item lg={3} sm={12} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

           <Card className={classes.root} style={{backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)"}}>
      <CardHeader
       
       
        
        subheader="Business Website"
      />
      <CardMedia
        className={classes.media}
        image={Zf1}
        title="jsk"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        React website for ZF1 Garden Logistics with database management system
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a href="https://www.zf1logistics.com"><Public/>  </a>
        </IconButton>
        <IconButton aria-label="share">
         <a href=""> <GitHub /> </a>
        </IconButton>
        
      </CardActions>
      
    </Card> 
            
           
            </Grid>
<Grid item lg={3} sm={12} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

           <Card className={classes.root} style={{backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)"}}>
      <CardHeader
       
       
        
        subheader="Business Website"
      />
      <CardMedia
        className={classes.media}
        image={Jsk}
        title="jsk"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        React website built for JSK Renewable Energy Limited
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a href="https://www.jskrenewable.com"><Public/>  </a>
        </IconButton>
        <IconButton aria-label="share">
         <a href=""> <GitHub /> </a>
        </IconButton>
        
      </CardActions>
      
    </Card> 
            
           
            </Grid>

        <Grid item lg={3} sm={12} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

          
                <Card className={classes.root}  style={{backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)"}}>
      <CardHeader
       
       
        
        subheader="Business Website"
      />
      <CardMedia
        className={classes.media}
        image={AM}
        title="3AM Missioin Ministry"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
       Website for based 3AM Mission Ministry, a USA based NGO
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a href="https://www.3ammissionministry.com"><Public/>  </a>
        </IconButton>
        <IconButton aria-label="share">
         <a href=""> <GitHub /> </a>
        </IconButton>
        
      </CardActions>
      
    </Card>
          
            
         </Grid> 




<Grid item lg={3} sm={12} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

<Card className={classes.root}  style={{backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)"}}>
      <CardHeader
       
       
        
        subheader="Ecommerce Website"
      />
      <CardMedia
        className={classes.media}
        image={Shop}
        title="shoponhype"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
       An ecommerce website for shoponhype with an administrator page
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a href="https://www.shoponhype.com"><Public/>  </a>
        </IconButton>
        <IconButton aria-label="share">
         <a href=""> <GitHub /> </a>
        </IconButton>
        
      </CardActions>
      
    </Card>
          
    
    
            
         </Grid>







<Grid item lg={3} sm={12} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

<Card className={classes.root}  style={{backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)"}}>
      <CardHeader
       
       
        
        subheader="Online Library"
      />
      <CardMedia
        className={classes.media}
        image={Book}
        title="bookshop"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
       An online library with an administrator page for management
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <a href="https://www.shoponhype.com"><Public/>  </a>
        </IconButton>
        <IconButton aria-label="share">
         <a href=""> <GitHub /> </a>
        </IconButton>
        
      </CardActions>
      
    </Card>
          
    
    
            
         </Grid>







        </Grid> 
    
    
    
    
</Container>
    </div>

      
    )
}

function Item(props)



{

     return (
         
       
         <div>
<div style={{position:"absolute", width:"100%",zIndex:"1"}}>

<h1 style={{color:"black", fontSize:"32px", marginTop:"16%", textAlign:"center", zIndex:"1"}} data-aos={"flip-right"}><span style={{ paddingLeft:12, paddingRight:12, backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)"}}>{props.item.name} </span></h1>
            
<a href={Cvmain} download ><Button style={{backgroundImage:"linear-gradient(315deg, #D29E00 0%,  #FFDE3B 74%)", color:"white",zIndex:1}}>
Download CV
</Button>
</a>



          
</div>

             <Particles className="port" style={{position:"",zIndex:1, height:"100%", width:"200%", backgroundColor:"red" }}
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


