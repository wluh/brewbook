import './recipe-card.css';

function RecipeCard() {
	return (
		<div className='recipe-card'>
			<div className='recipe-title'>
				<div className='recipe-title-text'>
					<p className='title'>Aeropress 1 <span className='subtitle'>by Wes Luh</span></p>
				</div>
				<div className='favorite'>

				</div>
			</div>
			<div className='recipe-body'>
				<div className='recipe-content'>
					<div className='recipe-instructions'>
						<p>
							Bloom for 30s with 50 ml<br />
							Pour 200 ml<br />
							Press at 2:30<br />
						</p>
					</div>
					<div className='recipe-rating'>

					</div>
				</div>
				<div className='recipe-specs'>
					<p>250 mL</p>
					<p>95 C</p>
					<p>17 g</p>
					<p>2:30</p>
				</div>
			</div>
		</div>
	);
}


export default RecipeCard;