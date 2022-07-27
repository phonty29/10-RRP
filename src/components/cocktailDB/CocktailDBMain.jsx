import CocktailDBSearchFrom from './CocktailDBSearchFrom';
import CocktailDBGrid from './CocktailDBGrid';
import CocktailDB from './CocktailDB';

const CocktailDBMain = () => {
	return (
		<CocktailDB>
			<main>
				<CocktailDBSearchFrom/>
				<CocktailDBGrid/>
			</main>
		</CocktailDB>
	);
}

export default CocktailDBMain;