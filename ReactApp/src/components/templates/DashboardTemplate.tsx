import { Button } from "@mui/material";
import { Link } from "react-router";
import styled from "styled-components";


const DashboardDiv = styled.div`
width: 100%;
`;

const DashboardTemplate = () => {

    return (
        <DashboardDiv>
            <Link to="/admin/manage-products">
                <Button variant="outlined">Product Manager Tool</Button>
            </Link>
        </DashboardDiv>
    );
}

export default DashboardTemplate;