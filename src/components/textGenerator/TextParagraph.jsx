import {useEffect} from 'react';
import {useSelector} from 'react-redux';

const TextParagraph = ({className}) => {
	const {numberOfParagraphs, paragraphs} = useSelector(state => state.textGenerator);

	return (
		<article className={className}>
			{numberOfParagraphs>0 && paragraphs.map((paragraph, index, array) => (<p key={index}>{paragraph}</p>))}
		</article>
	);
}

export default TextParagraph;