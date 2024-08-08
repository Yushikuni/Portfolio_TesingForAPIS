import React, { Component } from 'react';
var ProfilePicture = require('../../assets/images/profilePic.png');

export class ProfileImage extends Component
{
    render()
    {
        return
        (
            <div>
                <section className='one-fourth' id="html">
                    <img src={ProfilePicture}/>
                </section>
            </div>
        )
    }
}