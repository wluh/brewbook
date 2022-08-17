import { useEffect, useState } from "react";

function RecipeGenerator() {

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      }

    const [brewDuration, setBrewDuration] = useState();
    const [brewRatio, setBrewRatio] = useState();
    const [brewStir, setBrewStir] = useState();
    const [brewTemp, setBrewTemp] = useState();
    const [brewGrind, setBrewGrind] = useState();

    const durations = [90, 120, 150];
    const ratios = [14, 16, 18];
    const temps = [90, 92, 94];
    const grind = ["fine", "medium", "coarse"];

    function randomize() {
        setBrewDuration(durations[randomNumber(0, 3)]);
        setBrewRatio(ratios[randomNumber(0, 3)]);
        setBrewTemp(temps[randomNumber(0, 3)]);
        setBrewGrind(grind[randomNumber(0, 3)]);
        setBrewStir(Math.random() < 0.5);
    }

    useEffect (() => {
        randomize();
    }, [])

	return (
        <>
        <h1>Recipe Generator</h1>
        <p>Brew Duration: {brewDuration}s</p>
        <p>Brew Ratio: 1:{brewRatio}</p>
        <p>Stir?: {brewStir ? 'Yes' : 'No'}</p>
        <p>Temperature: {brewTemp}C</p>
        <p>Grind Size: {brewGrind}</p>
        <button onClick={() => randomize()}>Randomize</button>
        </>
	);
}

export default RecipeGenerator;