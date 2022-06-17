
import {Routes, Route, useLocation} from 'react-router-dom';

import {AnimatePresence} from 'framer-motion';

/* 	Import Homepage route	*/
import Homepage from './routes/Homepage';

/* 	Import Skills route	*/

import Skills from './routes/Skills';

/* 	Import Resume route	*/

import Resume from './routes/Resume';

/* 	Import Services route	*/

import Services from './routes/Services';

/* 	Import Contact route	*/

import Contact from './routes/Contact';



function AnimatedRoutes({setViewCardVisibility}){
	const location= useLocation();
return(
	<AnimatePresence>
		<Routes location={location} key={location.pathname}>
			<Route path="/" element={<Homepage/>} /> 
			<Route path="/skills" element={<Skills setViewCardVisibility={setViewCardVisibility}/>} /> 
			<Route path="/resume" element={<Resume/>} /> 
			<Route path="/services" element={<Services/>} /> 
			<Route path="/contact" element={<Contact/>} /> 		
		</Routes>
	</AnimatePresence>

)

}

export default AnimatedRoutes