import {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

// Navbar component

function Navbar(){

const menuBtnIcon= useRef();
const homeBtn= useRef();
const skillsBtn= useRef();
const resumeBtn= useRef();
const contactBtn= useRef();
const serviceBtn= useRef();

/* 	Active tab state controll	*/
const [isActive, setIsActive]= useState(null);

useEffect(()=>{
setIsActive(isActive=> homeBtn.current )
}, [])


/*	Icon toggler function 	 */

function toggleIcon(){
	menuBtnIcon.current.classList.toggle('fa-bars')
	menuBtnIcon.current.classList.toggle('fa-times')

}

	return (
		<>

	<header className="header sticky-top">

		<nav className="navbar navbar-expand-lg navbar-dark">
		<div className="container">
			<a href="/" className="navbar-brand">Rhinston Jones</a>
			    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
			    	onClick={toggleIcon}
			    >
    			<i className="fas fa-bars" ref={menuBtnIcon}></i>
    			</button>
    			<div className="collapse navbar-collapse" id="navbarSupportedContent">
    			<ul className="navbar-nav ms-auto">
    			<li className="nav-item"><Link to="/" className={isActive === homeBtn.current ? "active nav-link": "nav-link"} ref={homeBtn}
    				onClick={()=>{
    					setIsActive(isActive=> homeBtn.current)
    				}}
    			>Portfolio</Link></li>

    		

    			<li className="nav-item"><Link to="/skills" className={isActive === skillsBtn.current ? "active nav-link": "nav-link"} ref={skillsBtn}
    				onClick={()=>{
    					setIsActive(isActive=> skillsBtn.current)
    				}}
    			>Skills</Link></li>

    			<li className="nav-item"><Link to="/resume" className={isActive === resumeBtn.current ? "active nav-link": "nav-link"} ref={resumeBtn}
    				onClick={()=>{
    					setIsActive(isActive=> resumeBtn.current)
    				}}
    			>Resume / CV</Link></li>

    			<li className="nav-item"><Link to="/services" className={isActive === serviceBtn.current ? "active nav-link": "nav-link"} ref={serviceBtn}
    				onClick={()=>{
    					setIsActive(isActive=> serviceBtn.current)
    				}}
    			>Services</Link></li>
    			<li className="nav-item"><Link to="/contact" className={isActive === contactBtn.current ? "active nav-link": "nav-link"} ref={contactBtn}
    				onClick={()=>{
    					setIsActive(isActive=> contactBtn.current)
    				}}
    			>Contact</Link></li>
    			</ul>
    			</div>
			</div>

		</nav>
	</header>


	</>
	)


}

export default Navbar