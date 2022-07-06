import ReqresUsers from '../components/reqres-users/ReqresUsers';
import Entry from '../components/Entry';

const routes = [
	{name: 'Reqres Users', path: '/reqresUsers', element: <ReqresUsers/>, exact: true},
	{name: 'Something else here', path: '/entry', element: <Entry/>, exact: true}
];

export default routes;