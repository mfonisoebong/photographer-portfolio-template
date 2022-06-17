import {motion} from 'framer-motion'
import hero from '../images/hero.jpg'
function Homepage(){
	return(
		<motion.div
			initial={{scale:0.5, x:"-100%"}}
			animate={{scale: 1, x: "0%"}}
			transition={{duration: 0.5, ease: "easeInOut"}}

			exit={{scale:0.5, x:"-100%"}}
		>
			<section className="homepage-section wrapper-section">
				<div className="container mt-5">
					<div className="d-flex flex-column-reverse flex-lg-row">
						<div className="hero-text p-2">
							<h1 className="heading">Welcome to my Portfolio</h1>
							<div className="text-container">
								<p>I am <span className="author">Rhinston Jones</span>. A professional photographer. I currently reside at beveryly Hills, North-carolina.</p>
								<p>Of course, I love taking <i className="fas fa-images"></i> and I have won multiple awards and acquired many certificates</p>
								<p>All necessary reference files and documents are available for download</p>
							</div>
							<div className="link-container container-fluid d-flex flex-wrap">

							
									<a href="#" className=" mb-2 me-2 btn btn-lg shadow-none" target="_blank"><i className="fab fa-facebook"></i><span className="ms-2">Facebook</span></a>
								

							
									<a href="#" className=" mb-2 me-2 btn btn-lg shadow-none" target="_blank"><i className="fab fa-linkedin"></i><span className="ms-2">LinkedIn</span></a>
								

							
									<a href="#" className=" mb-2 me-2 btn btn-lg shadow-none" target="_blank"><i className="fab fa-twitter"></i><span className="ms-2">Twitter</span></a>
								


							
									<a href="#" className=" mb-2 me-2 btn btn-lg shadow-none" target="_blank"><i className="fab fa-youtube"></i><span className="ms-2">Youtube</span></a>
								
							
									<a href="#" className=" mb-2 me-2 btn btn-lg shadow-none" target="_blank"><i className="fab fa-instagram"></i><span className="ms-2">Instagram</span></a>
								
							</div>
						</div>
						<div className="hero-image d-flex justify-content-center">
							<img src={hero} alt="hero image"/>
						</div>



					</div>
				</div>
			</section>
		</motion.div>

	
	)
}

export default Homepage