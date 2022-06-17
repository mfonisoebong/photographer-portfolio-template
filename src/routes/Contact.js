import {motion} from 'framer-motion'

function Contact(){
	return(
		<motion.div
			initial={{scale:0.5, x:"-100%"}}
			animate={{scale: 1, x: "0%"}}
			transition={{duration: 0.5, ease: "easeInOut"}}
			exit={{scale:0.5, x:"-100%"}}
		>
		<section className="contact-section wrapper-section">
			<div className="container mt-5">
				<div className="hero-text">
				</div>

				<div className="d-flex flex-column flex-lg-row">
					<div className="flex-item m-4">
					<h4>Have a question or project in mind? Just send me a message</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, magnam.
							Lorem ipsum dolor sit amet consectetur adipisicing, elit. Ad fuga, quisquam adipisci facilis ea soluta, deserunt id nemo.
						</p>

						<div className="d-flex sub-flex-item mb-4">
							<button className="btn btn-lg shadow-none px-4 py-1">
								<i className="fas fa-phone-volume"></i>
							</button>
							<div className="ms-3">
								<h6>Call me now</h6>
								<h5><strong>+1-202-555-1934</strong></h5>
							</div>
						</div>

						<div className="d-flex sub-flex-item">
							<button className="btn btn-lg shadow-none px-4 py-1">
								<i className="far fa-envelope"></i>
							</button>
							<div className="ms-3">
								<h6>Chat with me</h6>
								<h5><strong>rhinstonjones@gmail.com</strong></h5>
							</div>
						</div>

						<div className="sub-container p-4 mt-4">
							<h6>Follow me on social media</h6>

							<a href="#" className="btn btn-sm me-3" target="_blank"><i className="fab fa-facebook"></i></a>
							<a href="#" className="btn btn-sm me-3" target="_blank"><i className="fab fa-instagram"></i></a>
							<a href="#" className="btn btn-sm me-3" target="_blank"><i className="fab fa-linkedin"></i></a>
							<a href="#" className="btn btn-sm me-3" target="_blank"><i className="fab fa-twitter"></i></a>
							<a href="#" className="btn btn-sm me-3" target="_blank"><i className="fab fa-youtube"></i></a>

						</div>

					</div>
					<div className="flex-item m-4">
					<h4>Just say Hi </h4>

					<form>
						<div className="row mb-3">
						<div className="col-6">
							<input type="text" className="form-control shadow-none" placeholder="Full Name" />
							
						</div>
						<div className="col-6">
							<input type="text" className="form-control shadow-none" placeholder="Email address" />
							
						</div>
						</div>

						<div className="mb-3">
							<input type="text" className="form-control shadow-none" placeholder="Subject" />
							
						</div>
						<div className="row mb-3">
						<div className="col-6">
							<input type="text" className="form-control shadow-none" placeholder="Full Name" />
							
						</div>

						<div className="col-6">
							<input type="text" className="form-control shadow-none" placeholder="Email address" />
							
						</div>
						</div>

						<textarea id="" cols="30" rows="10" className="form-control shadow-none" placeholder="Message"></textarea>

						<button className="btn mt-3" type="submit"><strong>SEND MESSAGE</strong> <i className="fas fa-paper-plane"></i> </button>
					</form>
					</div>
				</div>

			</div>
		</section>

		</motion.div>
	)
}

export default Contact