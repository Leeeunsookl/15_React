// Header.js

import React from 'react';

function Header() {
    return (
        <div className='header'>
            <h1>오늘의 할 일!!! {new Date().toLocaleDateString()}</h1>
        </div>
    );
}

export default Header;
