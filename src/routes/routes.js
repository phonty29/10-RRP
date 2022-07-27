import ReqresUsers from '../components/reqres-users/ReqresUsers';
import TourPage from '../components/tours/TourPage';
import Reviews from '../components/reviews/Reviews';
import Menu from '../components/menu/Menu';
import Accordion from '../components/accordion/Accordion';
import Slider from '../components/slider/Slider';
import TextGenerator from '../components/textGenerator/TextGenerator';
import GroceryBud from '../components/grocery-bud/GroceryBud';
import StripeSubmenus from '../components/stripe-submenus/StripeSubmenus';
import CocktailDBMain from '../components/cocktailDB/CocktailDBMain';
import CocktailDBAbout from '../components/cocktailDB/CocktailDBAbout';
import SingleCocktail from '../components/cocktailDB/SingleCocktail';
import CocktailDBError from '../components/cocktailDB/CocktailDBError';

const routes = [
	{name: 'Reqres Users', path: '/reqres-users', element: <ReqresUsers/>, exact: true},
	{name: 'Tour Agency', path: '/tourPage', element: <TourPage/>, exact: true},
	{name: 'Reviews', path: '/reviews', element: <Reviews/>, exact: true},
	{name: 'Accordion', path: '/accordion', element: <Accordion/>, exact: true},
	{name: 'Menu', path: '/menu', element: <Menu/>, exact: true},
	{name: 'Slider', path: '/slider', element: <Slider/>, exact: true},
	{name: 'Text Generator', path: '/text-generator', element: <TextGenerator/>, exact: true},
	{name: 'Grocery Bud', path: '/grocery-bud', element: <GroceryBud/>, exact: true},
	{name: 'Stripe Submenus', path: '/stripe-submenus', element: <StripeSubmenus/>, exact: true},
];
export default routes;


export const cocktailDBRoutes = [
	{name: 'CocktailDB', path: '/cocktailDB', element: <CocktailDBMain/>, exact: true},
	{name: 'About', path: '/cocktailDB/about', element: <CocktailDBAbout/>, exact: true},
	{name: 'SingleCocktail', path: '/cocktailDB/single-cocktail/:idDrink', element: <SingleCocktail/>, exact: true},
	{name: 'Error', path: '/cocktailDB/*', element: <CocktailDBError/>, exact: true}
];
