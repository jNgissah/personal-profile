import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


import School from '@material-ui/icons/School';
import Work from '@material-ui/icons/Work';
import Bookmark from '@material-ui/icons/Bookmark';
import MovieFilter from '@material-ui/icons/MovieFilter';
import Code from '@material-ui/icons/Code';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AOS from 'aos';
import "aos/dist/aos.css";


export default function CustomizedTimeline() {
    
     AOS.init({
    // initialise with other settings
    duration : 700
  });

  return (
      <Container maxWidth="md" >
    <Timeline align="left">
      <TimelineItem style={{width:'198%',marginLeft:'-98%'}} data-aos="fade-up">
      
        <TimelineSeparator >
          <TimelineDot color='Primary'>
            <School />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{textAlign:"left"}}>
      
            <Typography variant="h6" style={{marginLeft:"0px"}} component="h2" data-aos="fade-up">
             <b> EDUCATION </b>
            </Typography>
      <br/>
            <Typography>
     
      
      
      <span style={{fontSize:"16px"}} data-aos="fade-up"> KWAME NKRUMAH UNIVERSITY OF SCINCE AND TECHNOLOGY (KNUST) </span> <br/>
      <span style={{fontSize:"14px", color:"grey"}} data-aos="fade-up"> BSc. Computational Physics </span> <br/>
      <span style={{fontSize:"14px", color:"grey"}} data-aos="fade-up"> September 2015 - June 2019 </span>
      
      
     
      </Typography>
         
        </TimelineContent>
      </TimelineItem>
      

<br/>
<TimelineItem style={{width:'198%',marginLeft:'-98%'}} data-aos="fade-up">
      
        <TimelineSeparator >
          <TimelineDot color='Primary'>
            <Work />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{textAlign:"left"}}>
      
            <Typography variant="h6" style={{marginLeft:"0px"}} component="h2" data-aos="fade-up">
             <b> WORK EXPERIENCE </b>
            </Typography>
<br/>
            <Typography>
     
      <span style={{fontSize:"16px"}} data-aos="fade-up"> RAVINLEAD TECH HUB (RTH) </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> Full-stack web developer </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> January 2019 - Date </span>
      
     <br/>
     <br/>
      <span style={{fontSize:"16px"}} data-aos="fade-up"> KNUST- COLLEGE OF ENGINEERING </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> IT / Student affairs Officer (National Service) </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> January 2019 - Date </span>
      
        
     <br/>
     <br/>
      <span style={{fontSize:"16px"}} data-aos="fade-up">UNIQUE ACADEMY </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> IT Teacher </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> January 2014 - August 2015 </span>
      
      </Typography>
         
        </TimelineContent>
      </TimelineItem>
      


<br/>
<TimelineItem style={{width:'198%',marginLeft:'-98%'}} data-aos="fade-up">
      
        <TimelineSeparator >
          <TimelineDot color='Primary'>
            <Bookmark />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{textAlign:"left"}}>
      
            <Typography variant="h6" style={{marginLeft:"0px"}} component="h2" data-aos="fade-up">
             <b> PROJECTS </b>
            </Typography>
<br/>
            <Typography>
     
      <span style={{fontSize:"16px"}} data-aos="fade-up">ESTABLISHMENT OF RAVINLEAD TECH HUB (RTH) </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> <a href="https://www.ravinlead.com">Ravinlead.com</a> </span>
           <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> January 2019 - Date </span>
      
     <br/>
     <br/>
      <span style={{fontSize:"16px"}} data-aos="fade-up"> DESIGN AND SIMULATE THE CHARACTERISTICS OF VARIOUS TRANSMISSION CABLES (Python).</span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> Final year project.</span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> 2018 / 2019 </span>
      
        
     <br/>
     <br/>
      <span style={{fontSize:"16px"}} data-aos="fade-up">THE SIR MODEL FOR SPREAD OF DISEASE (Python, shell scripting) </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> Personal Project </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> 2019 </span>

       <br/>
     <br/>
      <span style={{fontSize:"16px"}} data-aos="fade-up">PLANAR THREE BODY PROBLEM (Python). </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> Personal Project </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> 2019 </span>
      
    <br/>
     <br/>
      <span style={{fontSize:"16px"}} data-aos="fade-up">TWO-BODY PROBLEM IN GENERAL RELATIVITY; THE BLACK HOLE AND THE SUN (Python).  </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> Personal Project </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> 2019 </span>
      
      </Typography>
         
        </TimelineContent>
      </TimelineItem>
      






<br/>
<TimelineItem style={{width:'198%',marginLeft:'-98%'}} data-aos="fade-up">
      
        <TimelineSeparator >
          <TimelineDot color='Primary'>
            <MovieFilter />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{textAlign:"left"}}>
      
            <Typography variant="h6" style={{marginLeft:"0px"}} component="h2" data-aos="fade-up">
             <b> PERSONAL EXPOSURE </b>
            </Typography>
<br/>
            <Typography>
     
                   
    
      <span style={{fontSize:"16px"}} data-aos="fade-up">Class representative </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> SDA Senior High School, Bekwai</span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> September 2011 to May 2013 </span>
      <br/>
     <br/>
                 
      <span style={{fontSize:"16px"}} data-aos="fade-up">Establishment of the Ravinlead Tech Hub (RTH) that functiona as both learning and profit avenue</span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> <a href="https://www.ravinlead.com">Ravinlead.com</a> </span>
           <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> January 2019 - Date </span>
      
     <br/>
     <br/>
      <span style={{fontSize:"16px"}} data-aos="fade-up"> Successful completion of a final year project work on the topic "Design and simulate the characteristics of various transmission Cables", by using python programming language I built a computer simulation to determine the characteristics of selected transmission cables after practically determining the resistivity of the cables.</span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> Final year project.</span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> 2018 / 2019 </span>
      
        
     <br/>
     <br/>
      <span style={{fontSize:"16px"}} data-aos="fade-up">Stood in the stead of my boss (The principal Administrative Officer, CoE, Student Affairs, KNUST) as the secretary to the college internship committee and college industrial meeting held on Thursday 24th October, 2019 at the associated consultants conference room, KNUST to discuss on how to improve on the students internship mobile and web application. </span> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> October 2019 </span>

   
      </Typography>
         
        </TimelineContent>
      </TimelineItem>
      









<br/>
<TimelineItem style={{width:'198%',marginLeft:'-98%'}} data-aos="fade-up">
      
        <TimelineSeparator >
          <TimelineDot color='Primary'>
            <Code />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{textAlign:"left"}}>
      
            <Typography variant="h6" style={{marginLeft:"0px"}} component="h2" data-aos="fade-up">
             <b>TECHNICAL SKILLS </b>
            </Typography>
<br/>
            <Typography>
     
                   
    
      <b style={{fontSize:"16px"}} data-aos="fade-up">PROGRAMMING LANGUAGES </b> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> Python (5 years), JavaScript (5 years), C++ (5 years), HTML / CSS (5 years), JSON (5 years), AJAX (5 years),  Bash (4 years),  Java (4 years)</span> 
        
      
     <br/>
     <br/>
     
      <b style={{fontSize:"16px"}} data-aos="fade-up">FRAMEWORKS</b> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> React JS (3 years), Djano(2 years)</span> 
     <br/>
     <br/>
     <b style={{fontSize:"16px"}} data-aos="fade-up">DevOps</b> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up">  Google Cloud (GCP), Linux, Windows</span> 
     <br/><br/>
     <b style={{fontSize:"16px"}} data-aos="fade-up">TOOLS</b> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> Git, SQL, MySQL, REST
 </span> 
     <br/><br/>
     <b style={{fontSize:"16px"}} data-aos="fade-up">SOFTWARE</b> <br/>
      <span style={{fontSize:"14px", color:"gray"}} data-aos="fade-up"> Adobe Photoshop, Microsoft Office, Latex, Excell
 </span> 
     <br/>
     
      </Typography>
         
        </TimelineContent>
      </TimelineItem>
      






    </Timeline>
      </Container>
  );
}
