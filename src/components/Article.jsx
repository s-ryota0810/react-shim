import { useState } from 'react'
import { Content, Title, Checkbox, PublishButton } from './index'

const Article = (props) => {
	const [isPublished, setIsPublished] = useState(false)
	const publishArticle = () => {
		setIsPublished(!isPublished)
	}

	const changeTitle = props.title + 'はい';
	return (
		<>
			<Title title={changeTitle} />
			<Content content={props.content} />
			{/* <button onClick={() => setIsPublished(!isPublished)}>公開</button> */}
			<Checkbox checked={isPublished} />
			<PublishButton onClick={publishArticle} isPublished={isPublished} />
		</>
	)
}

export default Article;
