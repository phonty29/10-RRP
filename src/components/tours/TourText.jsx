import {useState} from 'react';

const TourText = ({tourText}) => {
	const [readMore, setReadMore] = useState(false);

	return (
		<p>
		{readMore ? tourText : `${tourText.substring(0, 200)}...`}
		<button onClick={() => {setReadMore(prev => !prev)}}>
			{readMore ? 'show less' : '  read more'}
		</button>
		</p>
	);
}

export default TourText;