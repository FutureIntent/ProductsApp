import { ThemeProvider } from "@mui/material";
import Header from "@src/components/organisms/Header";
import { theme } from "@src/configs/Media";
import useGuard from "@src/hooks/useGuard";
import { Outlet } from "react-router";
import styled from "styled-components";


const IndexWrapperDiv = styled.div`
width: 100%;
`;

const ContentDiv = styled.div`
width: 100%;
box-sizing: border-box;
padding: 1.5rem 1rem;
`;

const IndexWrapper = () => {

    useGuard();


    return (
        <ThemeProvider theme={theme}>
            <IndexWrapperDiv>
                <Header />
                <ContentDiv>
                    <Outlet />
                </ContentDiv>
                {/* <Footer /> */}
            </IndexWrapperDiv>
        </ThemeProvider>
    );
}

export default IndexWrapper;