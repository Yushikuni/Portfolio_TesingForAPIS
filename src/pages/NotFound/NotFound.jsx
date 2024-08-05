import React from 'react';
import imgURL from '../../assets/images/bg-2.png';

function NotFound() {
    return (
        <div>
            <h1>NotFound PAGE</h1>
            document.getElementById('bg-2').style.background=`url("${imgURL}")`;
        </div>
    );
}
export default NotFound;