import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import type { RootState } from "@src/configs/Redux";
import { useSelector } from "react-redux";
import { handleLogout } from "@src/functions/auth/handleLogout";
import { Link } from "react-router";


const HeaderDiv = styled.div`
width: 100%;
box-sizing: border-box;
`;

const ButtonWrapper = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 0.5rem;
`;

const Header = () => {

    const authenticated = useSelector((state: RootState) => state.user.status);
    console.log(`auth: ${authenticated}`);

    return (
        <HeaderDiv>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>

                        <Link to="/">
                            <IconButton
                                size="large"
                                edge="start"
                                color="primary"
                                aria-label="home"
                                sx={{ mr: 2 }}
                            >
                                <HomeIcon />
                            </IconButton>
                        </Link>

                        {
                            authenticated && <Link to="/admin">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="secondary"
                                    aria-label="home"
                                    sx={{ mr: 2 }}
                                >
                                    <DashboardIcon />
                                </IconButton>
                            </Link>
                        }

                        <ButtonWrapper>
                            {!authenticated && <Link to="/auth"><Button color="success" variant="outlined">Login</Button></Link>}
                            {authenticated && <Button color="error" variant="outlined" onClick={() => handleLogout()}>Logout</Button>}
                        </ButtonWrapper>

                    </Toolbar>
                </AppBar>
            </Box>
        </HeaderDiv>
    );
}

export default Header;