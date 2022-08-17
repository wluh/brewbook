import './RecipeCarousel.css';
import RecipeCard from '../RecipeCard/recipe-card';

function RecipeCarousel(props) {
	return (
        <div className="recipe-carousel">
            <div className='carousel-title'>
                <h1>{props.title}</h1>
            </div>    
            <div className='carousel'>
                <RecipeCard> </RecipeCard>
                <RecipeCard> </RecipeCard>
                <RecipeCard> </RecipeCard>
                <RecipeCard> </RecipeCard>
            </div>

        </div>


	);
}

export default RecipeCarousel;