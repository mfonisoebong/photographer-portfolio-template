
//Footer component
function Footer(){

	const date= new Date().getFullYear();

	return(
		<footer>
			<div className="container">
				<p className="text-center"><span className="author">Rhinston Jones</span>  <i className="fas fa-camera"></i> | {date}</p>
			</div>
		</footer>
	)
}

export default Footer;