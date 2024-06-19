import React from 'react'
import './stylesheets/Header.css'
import Accueil from '../Pages/Accueil'
import Portfolio from '../Pages/Portfolio'
import Contact from '../Pages/Contact'
import Apropos from '../Pages/Apropos'
import Error from '../Pages/404'

const Header = ({setContent}) => {
    const handleMenu = (select)=> {
       
       
        switch(select){
            case 1:
                setContent(<Accueil />);
                break;
            case 2:
                setContent(<Portfolio />);
                break;
            case 3: 
                setContent(<Contact />);
                break;
            case 4:
                setContent(<Apropos />);
                break;
            default:
                setContent(<Error />);
                break;
        }
    }
  return (
    <div className='Header'>
        <img onClick={()=>{handleMenu(1)}} src="./logo20.png" alt="logo" />
        <div>
            <ul>
                <li onClick={()=>{handleMenu(1)}} >Accueil</li>
                <li onClick={()=>{handleMenu(2)}} >Portfolio</li>
                <li onClick={()=>{handleMenu(3)}} >Contact</li>
                <li onClick={()=>{handleMenu(4)}} >A propos</li>
            </ul>
        </div>
    </div>
  )
}

export default Header