import React, {useState} from 'react';
import style from './Header.module.css';

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <
        >
            <h2>Малярчук Тарас Васильович</h2>
            <div id="student"
                 onClick={() => setIsToggled(!isToggled)}
                 className={isToggled ? style['primary-1'] : ''}
            >
                <b>Студент групи ІС-13</b>
            </div>
        </>
    );
};

export default Header;