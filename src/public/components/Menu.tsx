import * as React from 'react';
import Context from '../utils/Context';
import '../styles/Menu.scss'

const Menu: React.FC = () => {
    const { dispatch } = React.useContext(Context);

    const handleClick = () => {
        const sideMenuBar = document.getElementById("sideMenuBar");
        const menu = document.getElementById('menu');
        
        if(sideMenuBar&&menu){
            sideMenuBar.style.width = '0';
            menu.style.display = 'inline';
        }
        
    }

    return(
        <div className='menu' id='sideMenuBar'>
            <div className='close' onClick={handleClick}>close</div>
            <div className='nav' >
                <ul className='list'>
                    <li><a onClick={()=>dispatch({type:'CHANGE_SECTION', sectionNum:0})}>Home</a></li>
                    <li><a onClick={()=>dispatch({type:'CHANGE_SECTION', sectionNum:1})}>About me</a></li>
                    <li><a onClick={()=>dispatch({type:'CHANGE_SECTION', sectionNum:2})}>Skills</a></li>
                    <li><a onClick={()=>dispatch({type:'CHANGE_SECTION', sectionNum:3})}>Portfolio</a></li>
                </ul>
            </div>
            <div className='footer'>
                <a className='github' href='https://github.com/yongseongJang'>Github</a>
                <p>yongsung0824@gmail.com</p>
            </div>
        </div>
    );
}

export default Menu;