import React from 'react';




function Subscribe(){
    return(
		<div className='container'>
			<div className='wrap_subscribe'>
				<h3 className='subscribe_title'>Subscribe < br/> to stay informed</h3>
				<form action='#'>
					<input className='subcribe_input' type='text' name='useremail' placeholder='Email' />
					<button className='subcribe_button' type='submit'>Apply</button>
				</form>
				<p className='subcribe_text'>By filling out this <br/> form you accept our <a href='#' className='subcribe_link'>Privacy Policy</a></p>
			</div>
	 	</div>
    )
}

export default Subscribe;
