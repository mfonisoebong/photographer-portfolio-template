import {motion} from 'framer-motion'

import {useState, useRef} from 'react';

import ErrorText from '../components/ErrorText';

import axios from 'axios';



function Contact(){

	const [formMessage, setFormMessage]= useState({type: null, data: null});
	const fullname= useRef();
	const email= useRef();
	const subject= useRef();
	const message= useRef();

	async function submitForm(){
		const formattedMessage= message.current.value.trim().replace("\n", "<br>");

		const Themessage= `<h3>${subject.current.value.trim()}</h3><br><p>${formattedMessage}</p><br>${fullname.current.value.trim()}<br>${email.current.value.trim()}`

		const reciever= '';
			
		try{
		const res= await axios.post(`http://127.0.0.1:3000/mfonisoservicesmailer/mail?reciever=${reciever}&msg=${Themessage}`)
			setFormMessage({type: 'success', data: res.data.msg})
		}

		catch(err){
			console.log(err)
			if(err.request.status===400){
				setFormMessage({type: 'failed', data: err.response.data.msg})
			}
			else{
				setFormMessage({type: 'failed', data: err.response.data.msg})

			}

		}
		
	
			
		

		
	}

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
					<h4>Just say Hi 👋</h4>
					{formMessage.data!==null && <ErrorText type={formMessage.type} text={formMessage.data} setFormMessage={setFormMessage}/>}

					<form onSubmit={(e)=>{e.preventDefault()} }>
						<div className="row mb-3">
						<div className="col-6">
							<input type="text" ref={fullname} className="form-control shadow-none" placeholder="Full Name" required/>
							
						</div>
						<div className="col-6">
							<input type="email" ref={email} className="form-control shadow-none" placeholder="Email address" required/>
							
						</div>
						</div>

						<div className="mb-3">
							<input type="text" ref={subject} className="form-control shadow-none" placeholder="Subject" required/>
							
						</div>
					

						<textarea id="" ref={message} cols="30" rows="10" className="form-control shadow-none input-danger" placeholder="Message" required></textarea>

						<button className="btn mt-3 shadow-none" type="submit" onClick={()=>{
							if(message.current.value.trim()==='' || fullname.current.value.trim()==='' || email.current.value.trim()==='' || subject.current.value.trim()==='' || message.current.value.trim()===''){
								setFormMessage({type: 'failed', data: 'All fields are required'})
							}
							else{
								submitForm()

							}
							}}><strong>SEND MESSAGE</strong> <i className="fas fa-paper-plane"></i> </button>
					</form>
					</div>
				</div>

			</div>
		</section>

		</motion.div>
	)
}

export default Contact