function ErrorText({text, type, setFormMessage}){
	const style= {color: '#fff', fontSize: '15px'};

    const className= type === 'success' ? 'alert bg-success w-100 p-2 alert-dismissible fade show' : 'alert bg-danger w-100 p-2 alert-dismissible fade show';
	return(
		<div className={className}>
			<p style={style}>{type=== 'success' ? <i className="fa-solid fa-circle-check me-2"></i> : <i className="fa-solid fa-circle-exclamation me-2"></i>}{text}</p>
            <button type="button" className="btn-close btn btn-sm shadow-none" data-bs-dismiss="alert" aria-label="Close" onClick={()=>{setFormMessage({type: null, data: null})}}></button>
		</div>

	)
}

export default ErrorText