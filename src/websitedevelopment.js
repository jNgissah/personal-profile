import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Button} from '@material-ui/core';
import Container from '@material-ui/core/Container';

import Para0 from './img/code/HD-wallpaper-code-programming-monitor-hacker.jpg';


import AOS from 'aos';

import Particles from 'react-tsparticles' 
import "aos/dist/aos.css";

import Cvmain from "./cv_joseph.pdf"







function Example(props){
    AOS.init({
    // initialise with other settings
    duration : 700
  });
    
    var items = [
        {
            name: "Website Development",
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
           
            
            
            
            
           
            
            
            
            <div style={{backgroundSize:"cover", paddingTop:30, paddingBottom:30}}>
            
            
            <Container  maxWidth="md" style={{textAlign:"left", backfroundColor:"rgba(255,255,255,0.1)"}}>   
                
                
                
<div data-aos="fade-up">
   
<br/>
<br/>
<b>Website Development </b> 
<p>
    As a web developer I have worked independently as freelancer and with my company as a teams member to create websites. Depending on the job, I have may focus on front-end development, which involves designing sites and producing content, or back-end development, which involves writing code to make website features work and most time focus on both aspects since i mostly work as an individual during my early stages. I have also become a webmaster for a site, providing maintenance, updates, and troubleshooting when needed, especially for websites i have alrerady built.
    <br/>
    <br/>

Web development and web design share many commonalities, but they differ in some key areas. Web design deals with the front-end of a website, concerning itself with appearance and user experience. Web development, on the other hand, deals with building technical front-end and/or back-end code that informs site function. As a developers I work exclusively on front-end code, back-end code, or both, and sometimes require overlap into web design. 
 <br/>
    <br/>

The primary methods i engage in when developing a website include coding and web markup. However, there are a multitude of development tasks that also go into it, such as scripting, security configuration, content development and ecommerce infrastructure
 
<br/>
<br/>
    
    <b>CODING</b> <br/>
I build websites by coding and I use different programming languages. These languages consist of unique vocabularies, syntax and commands that define the visual representation and functionality of the websites. The language is used for development depends on the platform, operating system or style of the website. Some of the most common coding languages and technologies I use include the following:
<ul>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>
<li>jQuery</li>
<li>ReactJS</li>
<li>NodeJS</li>
<li>Ajax</li>
<li>MySQL</li>
<li>PHP</li>
<li>Python</li>

</ul>
I enjoy building websites from scratch, it gives me the opportunity and the freedom to add prefered features to suit clients satisfaction.
</p>
<br/>







</div>


    </Container> 

</div>

     

            
    
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
    return (
        <div>
<div style={{position:"absolute", width:"100%",zIndex:"1"}}>

<h1 style={{color:"black", fontSize:"32px", marginTop:"14%", textAlign:"center", zIndex:"1"}} data-aos={"flip-right"}><span style={{ paddingLeft:12, paddingRight:12, backgroundImage:"linear-gradient(315deg, #eeeeee 0%,  #F5F5F5 74%)"}}>{props.item.name} </span></h1>
            
<a href={Cvmain} download ><Button style={{backgroundImage:"linear-gradient(315deg, #D29E00 0%,  #FFDE3B 74%)", color:"white",zIndex:1}}>
Download CV
</Button>
</a>





          
</div>

             <Particles className="web" style={{position:"",zIndex:1, height:"100%", width:"200%", backgroundColor:"red" }}
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


