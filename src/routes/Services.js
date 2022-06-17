
import {motion} from 'framer-motion';

/* 	image import 	*/
import imageone from '../images/img-1.jpg';

/* 	image import 	*/
import imagetwo from '../images/img-2.jpg';

/* 	image import 	*/
import imagethree from '../images/img-3.jpg';

/* 	image import 	*/
import imagefour from '../images/img-4.jpg';


function Services(){
	return(
		<motion.div
	
			initial={{scale:0.5, x:"200%"}}
			animate={{scale: 1, x: "0%"}}
			transition={{duration: 0.5, ease: "easeInOut"}}

			exit={{scale:0.5, x:"-100%"}}				
		>

		<section className="wrapper-section services-section">
			<div className="container mt-5">
				<div className="hero-text">
					<h1 className="heading">Services</h1>
				</div>

				<div className="row mt-5 gy-5">
					<div className="col-sm-12 col-md-6 col-lg-4 column-item d-flex justify-content-center">
						<img src={imageone} />

						<div className="overlay-one">
							<h1 className="text-center">Editorial photoraphy</h1>
						</div>

						<div className="overlay-two p-2">
							<p className="text-center">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, possimus.
							</p>
						</div>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-4 column-item d-flex justify-content-center">
						<img src={imagetwo} />

						<div className="overlay-one">
							<h1 className="text-center">Creative photoraphy</h1>
						</div>

						<div className="overlay-two p-2">
							<p className="text-center">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, possimus.
							</p>
						</div>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-4 column-item d-flex justify-content-center">
						<img src={imagethree} />

						<div className="overlay-one">
							<h1 className="text-center">Night photoraphy</h1>
						</div>

						<div className="overlay-two p-2">
							<p className="text-center">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, possimus.
							</p>
						</div>
					</div>

					<div className="col-sm-12 col-md-6 col-lg-4 column-item d-flex justify-content-center">
						<img src={imagefour} />

						<div className="overlay-one">
							<h1 className="text-center">Potrait photoraphy</h1>
						</div>

						<div className="overlay-two p-2">
							<p className="text-center">
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, possimus.
							</p>
						</div>
					</div>



				</div>
			</div>
		</section>

		</motion.div>
	)
}

export default Services