import './topnav.css';

function TopNav() {
	return (
				<div className='header'>
					
					<span className='logotype'>
						<p>Brewbook</p>
					</span>
					<span className='spacer'>
					</span>
					<div className='header-nav-right-wrapper'>
						<span className='header-nav-right'>
							<p>Discover</p>
							<p>Brewbook</p>
							<p>Profile</p>
						</span>
					</div>
					

				</div>
	);
}


export default TopNav;