
import {motion} from 'framer-motion';

/* 	image import	*/
import hero from '../images/hero.jpg';

/* 	mock resume sample import	*/

import resume from '../resume/resume-sample.pdf';


function Resume(){
	return(
		<motion.div
	
			initial={{scale:0.5, x:"200%"}}
			animate={{scale: 1, x: "0%"}}
			transition={{duration: 0.5, ease: "easeInOut"}}

			exit={{scale:0.5, x:"-100%"}}				
		>

		<section className="wrapper-section resume-section">
			<div className="container mt-5">
							<div className="d-flex flex-column-reverse flex-lg-row">
						<div className="hero-text p-2 mt-3">
							<h1 className="heading">Resume</h1>
							<div className="text-container">
								<p>
									Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Odio libero temporibus deleniti magnam suscipit ex dicta commodi sit impedit reprehenderit.
								</p>

								<a href={resume} className="btn btn-lg shadow-none" download>Download</a>
							</div>
						</div>
						<div className="hero-image d-flex justify-content-center">
							<img src={hero} alt="hero avatar from imports"/>
						</div>



					</div>
			</div>
		</section>

		</motion.div>
	)
}

export default Resume;