import React from 'react';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import "./css/Home.css"
import "react-icons/fa"
import {IconContext} from "react-icons"
import { LocationOutline } from 'react-ionicons';
import { FaGithub } from 'react-icons/fa';

function Home() {
    return (
        <>
        <h1 id="type">george.is(
            <span style={{color: 'rgb(86, 28, 153)', fontWeight: 'bold'}}>
            ' <Typewriter 
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={30}
                delaySpeed={1000}
                words={['Developer', 'CLI developer', 'Discord bot developer', 'Coder', 'Website developer']}
                />
                    ')
                
            </span>
            
        </h1>
        <a href='https://www.github.com'><IconContext.Provider value={{ style: {fontSize: '30px', color: "white"}}}>
       <div>
       <FaGithub/>
       </div>
    </IconContext.Provider>
    </a>
    <IconContext.Provider value={{ style: {fontSize: '30px', color: "gray"}}}>
       
       <LocationOutline/>
       
    </IconContext.Provider>
       
        </>
    );
}

export default Home;