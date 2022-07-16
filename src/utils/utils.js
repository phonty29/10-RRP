import axios from 'axios';
import cookies from '../cookies/cookies';
import {reqresUsersFetched, toursTwitched, switchReviewer, showAllMenu} from '../actions/actions';
import { sliderReviewersFetched, nextSlide } from '../slices/slices';

export const reviewer_roles = ['web designer', 'web developer', 'intern', 'boss', 'Software developer', 'IT project managers'];
export const reviewer_reviews = [
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
    text: 'Chislic ham hock landjaeger hamburger brisket. Tri-tip turkey ham hock picanha tongue.'
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-2.jpeg',
    text: 'Bacon ipsum dolor amet sausage tongue kevin chuck alcatra strip steak pork chop jerky. Drumstick pastrami brisket venison frankfurter.'
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-3.jpeg',
    text: 'Kielbasa boudin capicola, short ribs meatloaf biltong chislic. Meatloaf kielbasa beef ribs, leberkas ham sausage buffalo turducken chuck kevin prosciutto rump.'
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-4.jpeg',
    text: 'Landjaeger buffalo salami, tail kielbasa biltong andouille shoulder tenderloin boudin jerky. Pork chop beef meatball jowl sirloin.'
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-5.jpeg',
    text: 'Swine ham pastrami rump tenderloin venison meatloaf shoulder landjaeger short loin strip steak pig pork chop pancetta.'
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-6.jpeg',
    text: 'Capicola pork chop swine corned beef drumstick. Alcatra sirloin landjaeger pork loin prosciutto, andouille flank spare ribs'
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-7.jpeg',
    text: 'Frankfurter chislic shank, sirloin pork loin tail bresaola chicken salami fatback beef doner short ribs brisket.'
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-8.jpeg',
    text: 'Alcatra turducken chislic bresaola flank strip steak tongue tri-tip corned beef ham hock frankfurter ground round drumstick.'
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: 'https://react-projects-5-menu.netlify.app/images/item-9.jpeg',
    text: 'Doner beef ribs swine tri-tip flank, ground round kielbasa frankfurter short loin. '
  },
];

export function getReviewersForSlider() {
  return async function(dispatch) {
    try {
			let response = await axios.get(cookies.get(`page_1`));
			let persons = response.data.data;
			dispatch(sliderReviewersFetched({persons: persons}));   
    } catch (error) {
      console.error(error);
    }
  }
};

export function getInitialClassnamesForSlider(index, last, classes) {
  switch(index) {
    case 0: return classes.activeSlide; 
    case last: return classes.lastSlide;
    default: return classes.nextSlide;
  }
};

export function getNextSlider(index, lastIndex, classes, array) {
  if (array[index].className == classes.activeSlide) {
    return classes.lastSlide;
  } else if ( (index > 0 && array[index - 1].className == classes.activeSlide) || (index == 0 && array[lastIndex].className == classes.activeSlide) ) {
    return classes.activeSlide;
  } else {
    return classes.nextSlide;
  }
};

export function getPrevSlider(index, lastIndex, classes, array) {
  if (array[index].className == classes.lastSlide) {
    return classes.activeSlide;
  } else if ( (index < lastIndex && array[index + 1].className == classes.lastSlide) || (index == lastIndex && array[0].className == classes.lastSlide) ) {
    return classes.lastSlide;
  } else {
    return classes.nextSlide;
  }
};