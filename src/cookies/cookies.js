import Cookies from 'universal-cookie';

const cookies = new Cookies();
cookies.set('page_1', 'https://reqres.in/api/users?page=1', {secure: true, sameSite: 'none'});
cookies.set('page_2', 'https://reqres.in/api/users?page=2', {secure: true, sameSite: 'none'});
cookies.set('tours', 'https://course-api.com/react-tours-project', {secure: true, sameSite: 'none'});
cookies.set('baconIpsumText', `https://baconipsum.com/api/?type=meat-and-filler&paras=9&format=text`, {secure: true, sameSite: 'none'});


export default cookies;