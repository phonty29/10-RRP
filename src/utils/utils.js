import axios from 'axios';
import cookies from '../cookies/cookies';
import {reqresUsersFetched, toursTwitched, switchReviewer, showAllMenu} from '../actions/actions';

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
			let response = await axios.get(cookies.get(`page_${page+1}`));
			let users = response.data;
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
			let response = await axios.get(cookies.get('tours'));
			let tours = response.data;
			dispatch(toursTwitched(tours));  		
		} catch (error) {
			console.error(error);
		}
	}
}

export function getReviewer(index) {
	return async function(dispatch) {
		try {
			let response = await axios.get(cookies.get(`page_1`));
			let reviewers = response.data;
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

export const MENU_ITEMS = [
	  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-1.jpeg',
    text: ''
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-2.jpeg',
    text: ''
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-3.jpeg',
    text: ''
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-4.jpeg',
    text: ''
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-5.jpeg',
    text: ''
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-6.jpeg',
    text: ''
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-7.jpeg',
    text: ''
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-8.jpeg',
    text: ''
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-9.jpeg',
    text: ''
  },
];

export function getBaconIpsumText() {
  return async function(dispatch) {
    try {
      let response = await axios.get(cookies.get('baconIpsumText'));
      let text = response.data;
      let texts = text.split("\n\n");
      texts.forEach((text, index, array) => {
        MENU_ITEMS[index].text = `${text.substring(0, 100)}...`;
      });
      dispatch(showAllMenu(MENU_ITEMS));    
    } catch (error) {
      console.error(error);
    } 
  }
}

