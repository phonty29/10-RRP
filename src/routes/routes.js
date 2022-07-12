import ReqresUsers from '../components/reqres-users/ReqresUsers';
import TourPage from '../components/tours/TourPage';
import Reviews from '../components/reviews/Reviews';
import Accordion from '../components/accordion/Accordion';
import Entry from '../components/Entry';

const routes = [
	{name: 'Reqres Users', path: '/reqresUsers', element: <ReqresUsers/>, exact: true},
	{name: 'Tour Agency', path: '/tourPage', element: <TourPage/>, exact: true},
	{name: 'Reviews', path: '/reviews', element: <Reviews/>, exact: true},
	{name: 'Accordion', path: '/accordion', element: <Accordion/>, exact: true},
	{name: 'Something else here', path: '/entry', element: <Entry/>, exact: true}
];

export default routes;