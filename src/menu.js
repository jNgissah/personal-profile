//import React from 'react';
import React from 'react';

import  {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
//import './materialize.css';
import './style.css';



import Main from './home';
import Contact from './contact';
import Portfolio from './portfolio';
import Scientific from './scientific';
import Mobileapp from './mobileapp';
import Website from './websitedevelopment';
//import Profile from './profile';
import Footer from './footer';
import Logo from './img/logo.png';
import Cv from './cv';
import clsx from 'clsx';
//import welcome from './img/air-con-compressor-not-working-hero-image.jpg';
//import logo from './img/user2.jpg';
import { makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu1 from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
    displayer_small:{
        [theme.breakpoints.up('xs')]: {
        display:'flex',
        },
         [theme.breakpoints.up('sm')]: {
       display:'none',
        }
    },
    displayer_big:{
        [theme.breakpoints.up('xs')]: {
        display:'none',
        },
         [theme.breakpoints.up('sm')]: {
       display:'flex',
        }
    }
}));




const Menu = ()=>{
    
  const classes = useStyles();
  const [state, setState] = React.useState({top: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[<Link to="/">Home</Link>,<Link to="/portfolio">Portfolio</Link>, <Link to="/cv">Cv</Link>,  <Link to="/contact">Contact</Link>].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
    </div>
  );


        
 
 console.log()     
        
        
        

    return(
        
        <Router>
         <div className={classes.displayer_big}>
            <div className="nav-wrapper containe before" >
                <Link to="/" className="brand-logo logo-container"> <img src={Logo} className="logo_img" alt="" /></Link>
                <ul className="right hide-on-med-and-down">
        
                    
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/cv">CV</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                
        
         </div>
         </div>
        
        <div>
       
        
        
        <div className={classes.displayer_small} style={{textAlign:'left', padding:10}}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><Menu1 /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
      <span style={{marginLeft:'24%'}}>
         <img src={Logo} className="logo_img_small" alt="" />
      </span>
    </div>
        
        
        
        </div>
        
        
       
        
        <Switch>
          <Route path="/portfolio">
            <Portfolio/>
          </Route> 
        
       
        <Route path="/cv">
            <Cv />
          </Route> 
       
          <Route path="/contact">
            <Contact />
          </Route>  
        <Route path="/scientific_computation">
            <Scientific />
          </Route>  
        <Route path="/mobileapp">
            <Mobileapp />
          </Route> 
        <Route path="/website_development">
            <Website/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>
        
        <Footer/>
        </Router>
        
        
        
        
    )
    
}



export default Menu;