import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";

const PostListBlock = styled(Responsive)`
	margin-top: 3rem;
`;

const WritePostButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 3rem;
`;

const PostItemBlock = styled.div`
	padding-top: 3rem;
	padding-bottom: 3rem;
	&:first-child {
		padding-top: 0;
	}
	& + & {
		border-top: 1px solid ${palette.gray[2]};
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 0;
		margin-top: 0;
		&:hover {
			color: ${palette.gray[6]};
		}
	}
	p {
		margin-top: 2rem;
	}
`;

const PostItem = ({ post }) => {
	const { publishedDate, user, title, body, _id } = post;
	return (
		<PostItemBlock>
			<Link to={`/@${user.username}/${_id}`}>{title}</Link>
			<SubInfo username={user.username} publishedDate={new Date(publishedDate)} />
			<p>{body}</p>
		</PostItemBlock>
	)
}

const PostList = ({ posts, loading, error, showWriteButton }) => {
	console.log(posts)
	if (error) {
		return <PostListBlock>로그인을 해주세요</PostListBlock>;
	}

	return (
		<PostListBlock>
			<WritePostButtonWrapper>
				{showWriteButton && (
					<Button cyan to="/write">
					새 글 작성하기
					</Button>
				)}
			</WritePostButtonWrapper>
			{!loading && posts && (
				<div>
					{posts.map(post => (
						<PostItem post={post} key={post._id} />
					))}
				</div>
			)}
		</PostListBlock>
	)
}

export default PostList;
