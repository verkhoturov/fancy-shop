interface TCommentList {
	comments: any
}

export const CommentList = ({ comments } : TCommentList) => {
	return (
		<div className="product-detail__reviews">
			{comments?.map((data: any) => (
				<p
					key={data.id}
					className="product-detail__reviews-text"
				    dangerouslySetInnerHTML={{ __html: data.review }}
				/>
			))}
		</div>
	)
}
