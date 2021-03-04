import * as React from 'react';
import Context from '../utils/Context'
import '../styles/Head.scss'

const Head: React.FC = () => {

    const { dispatch } = React.useContext(Context);

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
            <a href="/" className='logo' onClick={()=>dispatch({type:'CHANGE_SECTION', sectionNum:0})}>YS</a>
                
            <div id='menu' className="menu" onClick={handleClick} >
                <div className='line'/>
                <div className='line'/>
                <div className='line'/>
            </div>
        </header>
    );
};

export default Head;