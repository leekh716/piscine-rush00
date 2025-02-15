import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "../common/Responsive";
import SubInfo from "../common/SubInfo";
import ReactMarkdown from "react-markdown";

const PostViewerBlock = styled(Responsive)`
	margin-top: 4rem;
`;

const PostHead = styled.div`
	border-bottom: 1px solid ${palette.gray[2]};
	padding-bottom: 3rem;
	margin-bottom: 3rem;
	h1 {
		font-size: 3rem;
		line-height: 1.5;
		margin: 0;
	}
`;

const PostContent = styled.div`
	font-size: 1.3125rem;
	color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading, actionButtons }) => {
	if (error) {
		if (error.response && error.response.status === 404) {
			return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
		}
		return <PostViewerBlock>오류 발생!</PostViewerBlock>;
	}

	if (loading || !post) {
		return <div>불러오는 중...</div>;
	}
	const { title, body, user, publishedDate } = post;
	return (
		<PostViewerBlock>
			<PostHead>
				<h1>{title}</h1>
				<SubInfo
					username={user.username}
					publishedDate={publishedDate}
					hasMarginTop
				/>
			</PostHead>
			{actionButtons}
			<PostContent>
				<ReactMarkdown>{body}</ReactMarkdown>
			</PostContent>
		</PostViewerBlock>
	)
}

export default PostViewer;
