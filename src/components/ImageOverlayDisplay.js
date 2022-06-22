//ImageOverlayDisplay component

function ImageOverlayDisplay({image, closeViewCard}){




	return(

		<div className="overlay-container">
		<div className="d-flex justify-content-center">
		<button className="btn btn-lg shadow-none"
			onClick={closeViewCard}
		><i className="fas fa-times"></i></button>
			<img src={image} alt="" />
			
		</div>

		</div>
	
	)
}

export default ImageOverlayDisplay
