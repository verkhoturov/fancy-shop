interface TCommentList {
    comments: any;
}

export const CommentList = ({ comments }: TCommentList) => {
    return (
        <div className="product-detail__reviews">
            {comments?.length > 0 ? (
                comments.map((data: any) => (
                    <p
                        key={data.id}
                        className="product-detail__reviews-text"
                        dangerouslySetInnerHTML={{ __html: data.review }}
                    />
                ))
            ) : (
                <p className="product-detail__reviews-text"> There is no reviews yet</p>
            )}
        </div>
    );
};
