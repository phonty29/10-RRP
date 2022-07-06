import {Routes, Route, Navigate} from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
	return (
       <Routes>
         {
           routes.map( (route) => 
             <Route key={route.path} path={route.path} element={route.element} exact={route.exact}/>
           )
         }         
         <Route path="/*" element={<Navigate to="/entry"/>} />
       </Routes> 
	);
}

export default AppRouter;