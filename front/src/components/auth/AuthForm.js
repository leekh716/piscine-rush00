import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const AuthFormBlock = styled.div`
	h3 {
		margin: 0;
		color: ${palette.gray[8]};
		margin-bottom: 1rem;
	}
`;

const StyledInput = styled.input`
	font-size: 1rem;
	border: none;
	border-bottom: 1px solid ${palette.gray[5]};
	padding-bottom: 0.5rem;
	outline: none;
	width: 100%;
	&:focus {
		color: ${palette.gray[7]};
		border-bottom: 1px solid ${palette.gray[7]};
	}
	& + & {
		margin-top: 1rem;
	}
`;

const Footer = styled.div`
	margin-top: 2rem;
	text-align: right;
	a {
		color: ${palette.gray[6]};
		text-decoration: underline;
		&:hover {
			color: ${palette.gray[9]};
		}
	}
`;

const ButtonWithMarginTop = styled(Button)`
	margin-top: 1rem;
`;

const textMap = {
	login: '로그인',
	register: '회원가입'
};

const ErrorMessage = styled.div`
	color: red;
	text-align: center;
	font-size: 0.875rem;
	margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
	const text = textMap[type];
	return (
		<AuthFormBlock>
			<h3>{text}</h3>
			<form onSubmit={onSubmit}>
				<StyledInput autoComplete="username" name="username" placeholder="아이디" onChange={onChange} value={form.username} required/>
				<StyledInput autoComplete="new-password" name="password" placeholder="비밀번호" type="password" onChange={onChange} value={form.password} required/>
				{type === 'register' && (
					<StyledInput autoComplete="new-password" name="passwordConfirm" placeholder="비밀번호 확인" type="password" onChange={onChange} value={form.passwordConfirm} />
				)}
				{error && <ErrorMessage>{error}</ErrorMessage>}
				<ButtonWithMarginTop cyan fullWidth>{text}</ButtonWithMarginTop>
			</form>
			<Footer>
				{type === 'login' ? (
					<Link to="/register">회원가입</Link>
				) : (
					<Link to="/login">로그인</Link>
				)}
			</Footer>
		</AuthFormBlock>
	);
};

export default AuthForm;
