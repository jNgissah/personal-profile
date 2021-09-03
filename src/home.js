import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Green from './img/sustainable.jpg';
import Energy from './img/energy.jpg';
import Use2 from './img/use2.jpg';
import Para0 from './img/code/HD-wallpaper-code-programming-monitor-hacker.jpg';
import Avatar from '@material-ui/core/Avatar';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Cvmain from "./cv_joseph.pdf"
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import Email from '@material-ui/icons/Email';
import Call from '@material-ui/icons/Call';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import Particles from 'react-tsparticles' 
import "aos/dist/aos.css";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import  {
  Link
} from 'react-router-dom';

const useStyles=makeStyles((theme)=>({
    
  large: {
       [theme.breakpoints.down('sm')]: {
      width: theme.spacing(20),
    height: theme.spacing(20),
           marginLeft:'80%'
    }, [theme.breakpoints.up('lg')]: {
       width: theme.spacing(43),
    height: theme.spacing(43),
           marginLeft:'24%',
        marginTop:'14%'
    }
   
  },
    image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 0,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },

    root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: '100%',
    height: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
    
    
    
    caro:{ 
        
        backgroundRepeat: 'no-repeat', 
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
    }
}));




function Example(props){
    AOS.init({
    // initialise with other settings
    duration : 700
  });
    const classes = useStyles();
    
    var items = [
        {
            name: "I AM JOSEPH NGISSAH",
            image: Para0,
            description: "I love to solve problems with code"
        }
    ]
    
    
 


    
  


    return (
        
        <div>
        
        
            
            
            
            
            
            
            
        
        <Carousel swipe={true} touch={true} animation={"slide"} >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>




    <div>
           
            
            
            
            
           
            
            
            
            <div style={{backgroundSize:"cover", paddingTop:40, paddingBottom:40}}>
            
            
            <Container  maxWidth="md" style={{textAlign:"left", backfroundColor:"rgba(255,255,255,0.1)"}}>   
                
                
                
            <h2 className="MuiTypography-h4" style={{textAlign:"left"}} data-aos="fade-up">
        <b> NTORI JOSEPH NGISSAH </b>
            </h2>

<p data-aos="fade-up" style={{textAlign:"left", marginTop:"-25px", fontSize:"16px", color:"green"}}>Computational Physicist / Website & Mobile Application Developer</p>
<div data-aos="fade-up">
    <div>
  
   
    <a href="https://github.com/jNgissah/" > <GitHub  style={{padding:"6px", fontSize:"30px"}}/> </a>
         <a href="https://www.linkedin.com/in/joseph-ngissah-0a6466127" > <LinkedIn  style={{padding:"6px", fontSize:"30px"}}/> </a>
    <a href="" > <Facebook  style={{padding:"6px", fontSize:"30px"}}/> </a>
    <a href="" > <Instagram  style={{padding:"6px", fontSize:"30px"}}/> </a>
    <a href="" > <Twitter  style={{padding:"6px", fontSize:"30px"}}/></a>
    <a href="mailto:joengissah1@outlook.com" ><Email  style={{padding:"6px", fontSize:"30px"}}/></a>
    <a href="tel:+233 268005074" ><Call  style={{padding:"6px", fontSize:"30px"}}/></a>
    
    
    </div>
<br/>
<br/>
<b>About Me </b> 
<p>
    I am a computer programmer who is always looking for challenging problems to solve. My background is in <b>Computational Physics</b>, however, I have an insatiable curiosity for AI – particularly deep learning – applications and their potential to change the technology landscape, data science, website development and mobile application development.
        <br/>
        <br/>

I established Ravinlead Tech Hub in the hope to provide some insight into the world of an ever learning and evolving developers and to provide technological solutions to problems.

With an innovative tech mind with 6 years of experience working as a computer programmer, I am always willing to learn to improve my skills and capable of working with a variety of technology and software solutions, and managing databases.
<br/>
        <br/>
I have the understanding that putting what I have acquired to work will help me attain more, build myself in the area of my acquisition and provide solution to the challenges faced daily. I consider whatever I do as a platform to improve upon myself and the society.<br/>
     

</p>
<br/>



</div>


    </Container> 

</div>
<div style={{ paddingTop:50, paddingBottom:30,backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)"}}>
<Container  maxWidth="md" style={{textAlign:"left"}}>
    
   <h2 className="MuiTypography-h5" style={{textAlign:"Center"}} data-aos="fade-up">
        <b> WHAT I DO </b>
            </h2> 



    
   <Grid container spacing={4} style={{marginBottom:80}}>
       <Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

            
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="computation"
          height="100"
          image={Green}
          title="computation"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Scientific Computation
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I use computational techniques to study mathematical models of physical phenomena to be measured, and to find optimal system parameters.  
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
         <Link to="/scientific_computation">
        <Button size="small" color="primary">
        Learn More 
        </Button>
</Link>
      </CardActions>
    </Card> 
            </Grid>
        <Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

            
            
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="website"
          height="100"
          image={Energy}
          title="website"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
           Website Development
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I engage in technologies such as web design, web publishing, web programming, and database management for website development.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/website_development">
        <Button size="small" color="primary">
          Learn More 
        </Button>
</Link>
      </CardActions>
    </Card> 
            
            
          
         </Grid> 




<Grid item xs={12} sm={4} md={4} style={{textAlign:'left', marginTop:20}}  data-aos="fade-up">

            
            
           <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="mobile app"
          height="100"
          image={Use2}
          title="mobile app"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Mobile App Development
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I engage in the process to making software for smartphones and digital assistants, most commonly for Android and iOS.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/mobileapp">
        <Button size="small" color="primary">
          Learn More
        </Button>
 </Link>
      </CardActions>
    </Card> 
            
            
          
       
            
            
            
            
         </Grid>
        </Grid> 
    
    
    
    
</Container>
</div>
     
<Container  maxWidth="md" style={{textAlign:"left", paddingTop:50, paddingBottom:50}}> 
            <h2 className="MuiTypography-h5" style={{textAlign:"Center"}} data-aos="fade-up">
        <b> MY SKILLS</b>
            </h2>


<Grid  container spacing={1}>
    
    <Grid item sm={12} lg={4} md={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={require("./img/code/react.png")} data-aos="fade-up"/>
        </ListItemAvatar>
               <ListItemText primary="ReactJS" secondary="3 years Experience" data-aos="fade-up"/>

      </ListItem>
    </List>         
    </Grid>

       <Grid item sm={12} lg={4} md={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={require("./img/code/nodejs.png")} data-aos="fade-up"/>
        </ListItemAvatar>
               <ListItemText primary="NodeJS" secondary="3 years Experience" data-aos="fade-up"/>

      </ListItem>
    </List>         
    </Grid>

     
    <Grid item sm={12} lg={4} md={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={require("./img/code/python.png")} data-aos="fade-up"/>
        </ListItemAvatar>
<div>
             <div style={{width:"100%"}}>
 
               <ListItemText primary="PYTHON" secondary="5 Years Experience" data-aos="fade-up"/>
         </div>      
          
</div>
      </ListItem>
    </List>         
    </Grid>

     
 
    <Grid item sm={12} lg={4} md={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={require("./img/code/c-seeklogo.com.svg")} data-aos="fade-up"/>
        </ListItemAvatar>
<div>
             <div style={{width:"100%"}}>
 
               <ListItemText primary="C++" secondary="5 Years Experience" data-aos="fade-up"/>
         </div>      
         
</div>
      </ListItem>
    </List>         
    </Grid>

     



    <Grid item sm={12} lg={4} md={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={require("./img/code/java.png")} data-aos="fade-up"/>
        </ListItemAvatar>
<div>
             <div style={{width:"100%"}}>
 
               <ListItemText primary="Java" secondary="5 Years Experience" data-aos="fade-up"/>
         </div>      
          
</div>
      </ListItem>
    </List>         
    </Grid>

     



    <Grid item sm={12} lg={4} md={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={require("./img/code/html5.png")} data-aos="fade-up"/>
        </ListItemAvatar>
<div>
             <div style={{width:"100%"}}>
 
               <ListItemText primary="HTML" secondary="5 Years Experience" data-aos="fade-up"/>
         </div>      
          
</div>
      </ListItem>
    </List>         
    </Grid>

     


    <Grid item sm={12} lg={4} md={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={require("./img/code/css.png")} data-aos="fade-up"/>
        </ListItemAvatar>
<div>
             <div style={{width:"100%"}}>
 
               <ListItemText primary="CSS" secondary="5 Years Experience" data-aos="fade-up"/>
         </div>      
          
</div>
      </ListItem>
    </List>         
    </Grid>

     

    <Grid item sm={12} lg={4} md={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={require("./img/code/js.png")} data-aos="fade-up"/>
        </ListItemAvatar>
<div>
             <div style={{width:"100%"}}>
 
               <ListItemText primary="JavaScript" secondary="5 Years Experience" data-aos="fade-up"/>
         </div>      
          
</div>
      </ListItem>
    </List>         
    </Grid>

     
    <Grid item sm={12} lg={4} md={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={require("./img/code/bash.png")} data-aos="fade-up"/>
        </ListItemAvatar>
<div>
             <div style={{width:"100%"}}>
 
               <ListItemText primary="Shell Scripting" secondary="4 Years Experience" data-aos="fade-up"/>
         </div>      
          
</div>
      </ListItem>
    </List>         
    </Grid>

     
 
    <Grid item sm={12} lg={4} md={4}>
      <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar  src={require("./img/code/materialui.png")} data-aos="fade-up"/>
        </ListItemAvatar>
<div>
             <div style={{width:"100%"}}>
 
               <ListItemText primary="Material UI" secondary="3 Years Experience" data-aos="fade-up"/>
         </div>      
          
</div>
      </ListItem>
    </List>         
    </Grid>

     




    
    
</Grid>






    </Container> 
     

            
    
    </div>




      <br/>
<br/>
<br/>
<br/>

    </div>

      
    )
}

function Item(props)



{
    const classes=useStyles()
    return (
        
        <div>
<div style={{position:"absolute", width:"100%"}}>
<Grid container spacing={5} >
<Grid  sm={12} lg={5} md={5} style={{ marginTop:"8%"}}>

<Avatar src={require("./img/code/photo_2021-08-11_04-25-100.png")} style={{zIndex:1}} data-aos={"flip-right"} className={classes.large}  />


</Grid>

<Grid  sm={12} lg={5} md={5}  style={{marginTop:"17%"}}>


<h1 style={{color:"white", fontSize:"33px", marginTop:30,position:"relative", zIndex:1}} data-aos={"flip-right"}><span style={{ paddingLeft:12, paddingRight:12, backgroundImage:"linear-gradient(315deg, #D29E00 0%,  #FFDE3B 74%)"}}>{props.item.name} </span></h1>
            <p style={{color:"#D29E00", fontSize:"20px",zIndex:1,position:"relative"}} data-aos={"zoom-in"}>{props.item.description}</p>
<a href={Cvmain} download ><Button style={{backgroundImage:"linear-gradient(315deg, #D29E00 0%,  #FFDE3B 74%)", color:"white",zIndex:1}}>
Download CV
</Button>
</a>




</Grid>

</Grid>


          
</div>

             <Particles className="particle" style={{position:"",zIndex:1, height:"100%", width:"200%", backgroundColor:"red" }}
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


