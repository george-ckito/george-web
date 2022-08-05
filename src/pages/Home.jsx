import React from 'react';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import "./css/Home.css"
import "react-icons/fa"
import {IconContext} from "react-icons"
import { FaGithub, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';

function Home() {
    return (
        <>
        <h1 id="type">
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "white"}}}>
       
       <FaUserAlt/>
       
    </IconContext.Provider>  george.isA(
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
        <img src='https://i.ibb.co/Tc4zfYH/file.png' style={{float: 'right', paddingRight: '190px', borderRadius: 35}}></img>
        <br></br><br></br><br></br>
        <div id='icons'>
            <h1>
        <IconContext.Provider value={{ style: {fontSize: '30px', color: "white"}}}>

       <FaMapMarkerAlt/>

    </IconContext.Provider>  george.livesIn(<span style={{color: 'rgb(86, 28, 153)', fontWeight: 'bold'}}>'georgia'</span>)</h1>
    <br></br><br></br><br></br>
    <h1>
        <a href='https://www.github.com/raining-codes'><IconContext.Provider value={{ style: {fontSize: '30px', color: "white"}}}>
       <FaGithub/>
    </IconContext.Provider>
    </a> george.github(<span style={{color: 'rgb(86, 28, 153)', fontWeight: 'bold'}}>'raining-codes'</span>)
    </h1>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

<center><h1>Github Projects</h1></center>
<br></br>
<br></br>
<center><div className='github'>
    <span  className='title'>
        lmao 
    </span>
    </div></center>
  
       
        </>
    );
}

export default Home;