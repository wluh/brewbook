import RecipeCarousel from '../RecipeCarousel/RecipeCarousel';
import './brewbook-home.css';
import ModalWindow from '../Modal/ModalWindow';
import RecipeGenerator from '../RecipeGenerator/RecipeGenerator';

function BrewbookHome() {
	return (
        <div className="brewbook-home">
            <RecipeCarousel title="Favorites"></RecipeCarousel>
            <RecipeCarousel title="My Brewbook"></RecipeCarousel>
            <ModalWindow content={RecipeGenerator()}></ModalWindow>
        </div>


	);
}

export default BrewbookHome;