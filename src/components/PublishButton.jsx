const PublishButton = (props) => {
	return (
		<button onClick={() => props.onClick()}>
			{'公開：' + props.isPublished.toString()}
		</button>
	)
}

export default PublishButton;
