import axios from 'axios';
import cookies from '../cookies/cookies';
import {reqresUsersFetched, toursTwitched, switchReviewer} from '../actions/actions';

const reviewer_roles = ['web designer', 'web developer', 'intern', 'boss', 'Software developer', 'IT project managers'];
const reviewer_reviews = [
 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
 'Tri-tip prosciutto pancetta, nulla irure sausage ullamco pork belly exercitation sed alcatra cillum aliqua dolor.  Id landjaeger alcatra, cupim sed kevin venison ut.  Cow tempor in exercitation',
 'Proident corned beef leberkas. Chislic bresaola doner, ipsum eu nulla landjaeger sausage shank aliquip nostrud flank ball tip.  Pork belly leberkas jerky cillum aute qui.',
 'The islands exceptional fertility and rainfall allowed the development of wet-field rice cultivation, which required sophisticated levels of cooperation between villages. Out of these village alliances, small kingdoms developed'
];

export function getReqresUsers(page) {
	return async function(dispatch) {
		try {
			const response = await axios.get(cookies.get(`page_${page+1}`));
			const users = response.data;
			dispatch(reqresUsersFetched(users.data));    
		} catch (error) {
			console.error(error);
		}	
	}
}

export const bodyStyle = document.body.style;

export function getTours() {
	return async function(dispatch) {
		try { 
			const response = await axios.get(cookies.get('tours'));
			const tours = response.data;
			dispatch(toursTwitched(tours));  		
		} catch (error) {
			console.error(error);
		}
	}
}

export function getReviewer(index) {
	return async function(dispatch) {
		try {
			const response = await axios.get(cookies.get(`page_1`));
			const reviewers = response.data;
			dispatch(switchReviewer(reviewers.data[index], reviewer_roles[index], reviewer_reviews[index]));    
		} catch (error) {
			console.error(error);
		}	
	}
}

export const accordionDefaultStyle = {
	transition: 'max-height 300ms ease-in-out',
	overflow: 'hidden',
	maxHeight: 0,		
};


