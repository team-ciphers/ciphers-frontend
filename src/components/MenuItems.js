import AboutUs from './AboutUs';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';


export const menuItems=[
    {
        title:'Home',
        url:'#',
        cName:'nav-links'
    },
    {
        title:'Profile',
        url:'#',
        cName:'nav-links'
    },
    {
        title:'About Us',
        url:'src/components/AboutUs.js',
        cName:'nav-links'
    }, 
     {
        title:'Contact Us',
        url:'#',
        cName:'nav-links'
    }
  
]

    
