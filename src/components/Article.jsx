const Article = (props) => {
	const changeTitle = props.title + 'はい';
	return (
		<>
			<h2>{changeTitle}</h2>
			<p>{props.content}</p>
		</>
	)
}

export default Article;
