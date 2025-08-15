import { ThemeProvider } from "@mui/material";
import Header from "@src/components/organisms/Header";
import { theme } from "@src/configs/Media";
import useAuth from "@src/hooks/useAuth";
import { Outlet } from "react-router";
import styled from "styled-components";


const IndexWrapperDiv = styled.div`
width: 100%;
`;

const IndexWrapper = () => {

    useAuth();


    return (
        <IndexWrapperDiv>
            <ThemeProvider theme={theme}>
                <Header />
                <Outlet />
                {/* <Footer /> */}
            </ThemeProvider>
        </IndexWrapperDiv>
    );
}

export default IndexWrapper;