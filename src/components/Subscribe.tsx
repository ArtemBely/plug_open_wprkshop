import React from 'react';




function Subscribe(){
    return(
		<div className='container_sub'>
			<div className='wrap_subscribe'>
				<h3 className='subscribe_title'>Subscribe < br/> to stay informed</h3>
				<form action='#'>
					<input className='subcribe_input' type='text' name='useremail' placeholder='Email' />
					<button className='subcribe_button' type='submit'>Apply</button>
				</form>
				<p className='subcribe_text'>By filling out this <br/> form you accept our <a href='#' className='subcribe_link'>Privacy Policy</a></p>
			</div>
			<div className='wrap_subscribe_phone'>
				<h3 className='subscribe_title_phone'>Subscribe < br/> to stay informed</h3>
				<form action='#'>
					<input className='subcribe_input_phone' type='text' name='useremail' placeholder='Email' />
					<button className='subcribe_button_phone' type='submit'>Apply</button>
				</form>
			</div>
	 	</div>
    )
}

export default Subscribe;
