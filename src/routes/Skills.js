

import {motion} from 'framer-motion';

/* 	image import 	*/
import imageone from '../images/img-1.jpg';

/* 	image import 	*/
import imagetwo from '../images/img-2.jpg';

/* 	image import 	*/
import imagethree from '../images/img-3.jpg';

/* 	image import 	*/
import imagefour from '../images/img-4.jpg';


function Skills({setViewCardVisibility}){


	return(
		<motion.div
	
			initial={{scale:0.5, x:"200%"}}
			animate={{scale: 1, x: "0%"}}
			transition={{duration: 0.5, ease: "easeInOut"}}

			exit={{scale:0.5, x:"-100%"}}				
		>


		<section className="wrapper-section skills-section">
			<div className="container mt-5">
				<div className="hero-text p-2">
					<h1 className="heading">An overview of My Skills</h1>
					<p className="">Over the years, I've gained a lot of experience and reviews 
						from those that I've worked with. 
						Below is an overview of the skills that I've acquired over the years and how skilled I am in those aspects
					</p>
				</div>

				<div className="row mt-5 gx-1">
					<div className="col-sm-12 col-md-6 column-item d-flex justify-content-center">
				<div className="borderTopLeft"></div>
				<div className="borderTopRight"></div>
				<div className="borderBottomLeft"></div>
				<div className="borderBottomRight"></div>
						
						<img src={imageone} alt="image"/>
						<button className="btn btn-lg shadow-none"
						onClick={()=>{setViewCardVisibility(imageone, true)}}
						>View</button>
					</div>
					<div className="col-sm-12 col-md-6 column-item d-flex justify-content-center">
				<div className="borderTopLeft"></div>
				<div className="borderTopRight"></div>
				<div className="borderBottomLeft"></div>
				<div className="borderBottomRight"></div>
						
						<img src={imagetwo} alt="image" />
						<button className="btn btn-lg shadow-none"
						onClick={()=>{setViewCardVisibility(imagetwo, true)}}
						>View</button>
					</div>

					<div className="col-sm-12 col-md-6 column-item d-flex justify-content-center">
				<div className="borderTopLeft"></div>
				<div className="borderTopRight"></div>
				<div className="borderBottomLeft"></div>
				<div className="borderBottomRight"></div>
						
						<img src={imagethree} alt="image" />
						<button className="btn btn-lg shadow-none"
						onClick={()=>{setViewCardVisibility(imagethree, true)}}
						>View</button>
					</div>

					<div className="col-sm-12 col-md-6 column-item d-flex justify-content-center">
				<div className="borderTopLeft"></div>
				<div className="borderTopRight"></div>
				<div className="borderBottomLeft"></div>
				<div className="borderBottomRight"></div>
						
						<img src={imagefour} alt="image" />
						<button className="btn btn-lg shadow-none"
						onClick={()=>{setViewCardVisibility(imagefour, true)}}
						>View</button>
					</div>

				</div>
			</div>
		</section>
		<script>
	
		</script>
		</motion.div>
	)
}

export default Skills