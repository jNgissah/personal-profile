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
            name: "Scientific Computation",
            image: Para0,
            description: "I love scientific computation"
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
<b>Scientific Computation </b> 
<p>
    
Scientific Computing is the collection of tools, techniques, and theories required to solve on a computer mathematical models of problems in Science.<br/>
<br/>
A majority of these tools, techniques, and theories are originally developed in Mathematics, many of them having their genesis long before the advent of electronic computers. This set of mathematical theories and techniques is called Numerical Analysis (or Numerical Mathematics) and constitutes a major part of scientific computing. The development of the electronic computer, however, signaled a new era in the approach to the solution of scientific problems. Many of the numerical methods that had been developed for the purpose of hand calculation (including the use of desk calculators for the actual arithmetic) had to be revised and sometimes abandoned. Considerations that where irrelevant or unimportant for hand calculation now became of utmost importance for the efficient and correct use of a large Computer System. Many of these considerations – programming languages, operating systems, management of large quantities of data, correctness of programs – were subsumed under the new discipline of Computing, on which scientific computing now depends heavily. Mathematics itself continues to play a major role in scientific computing: it provides the language of the mathematical models that are to be solved and information about the suitability of a model (Does it have a solution? Is the solution unique?) and it provides the theoretical foundation for the numerical methos and, increasingly, many of the tools from computer science.
<br/>
<br/>
    
    
    
   Scientific Computing is nowadays the “third pillar of science”, standing right next to theoretical analysis and experiments for scientific discovery.

Computation becomes crucially important in situations such as:

<ul>
<li>The problem at hand cannot be solved by traditional experimental or theoretical means</li>
<li>Experimentation may be dangerous</li>
<li>The problem would be too expensive or time-consuming to try to solve by other avenues</li>
</ul>

Furthermore, computer simulations can be embedded in optimization algorithms for optimal designs, e.g. the optimal design of aircrafts in the computer instead of experience driven trial and error designs with the support of expensive wind tunnel experiments.
<br/>
<br/>
Another characteristic of Scientific Computing is that it is a multidisciplinary activity. Generally, it involves experts in the application at hand, and also applied mathematicians and computer scientists that help to implement computational solution.
<br/>
<br/>
    I specialize in building scientific models by using the following programming languages;
<ul>
    <li>Python</li>
    <li>C++</li>
</ul>
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

             <Particles style={{position:"", height:"100%", width:"200%", backgroundColor:"red"  }} className={"scientific"}
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


