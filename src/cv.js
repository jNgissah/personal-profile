import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Button from '@material-ui/core/Button';
import Para1 from './img/img/img5.jpeg';
import AOS from 'aos';
import Particles from 'react-tsparticles' 
import Cvmain from './cv_joseph.pdf' 


import "aos/dist/aos.css";
//import itemData from './data';
//import ImageList from '@material-ui/core/ImageList';
//import ImageListItem from '@material-ui/core/ImageListItem';
import Images from './img';




function Example(){
      AOS.init({
    // initialise with other settings
    duration : 700
  });
//    const classes = useStyles();
    
     var items = [
        {
            name: "MY RESUME",
            image: Para1,
            description: "We stay committed to our work"
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
        <br/>

 <Images/>
            <br/>
            <br/>
            <br/>
            <br/>
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

             <Particles style={{position:"", height:"100%", width:"200%", backgroundColor:"red"  }} className={"cv"}
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


