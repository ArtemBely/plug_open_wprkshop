import React from 'react';




function Header(){
    return(
		<div className='container'>
			<div className='wrap_subscribe'>
				<h3 className='subscribe_title'>Subscribe to stay informed</h3>
				<form action='#'>
					<input className='subcribe_input' type='text' name='useremail' placeholder='Email' />
					<button className='subcribe_button' type='submit'>Apply</button>
				</form>
				<p className='subcribe_text'>By filling out this <br/> form you accept our Privacy Policy</p>
			</div>
	 	</div>
    )
}

export default Header;
