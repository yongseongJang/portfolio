import * as React from 'react';
import '../styles/Head.scss'

const Head: React.FC = () => {

    const handleClick = () => { 
        const sideMenuBar = document.getElementById("sideMenuBar");
        const menu = document.getElementById('menu');
        if(sideMenuBar&&menu){
            sideMenuBar.style.width = '300px';
            menu.style.display = 'none';
        }
    }

    return (
        <header>
            <a href="#" className='logo'>YS</a>
                
            <div id='menu' className="menu" onClick={handleClick} >
                <div className='line'/>
                <div className='line'/>
                <div className='line'/>
            </div>
        </header>
    );
};

export default Head;