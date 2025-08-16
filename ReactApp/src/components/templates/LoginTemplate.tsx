import styled from "styled-components";
import LoginForm from "@components/organisms/LoginForm";


const LoginDiv = styled.div`
width: 100%;
`;

const LoginTemplate = () => {


    return (
        <LoginDiv>
            <LoginForm />
        </LoginDiv>
    );
}

export default LoginTemplate;