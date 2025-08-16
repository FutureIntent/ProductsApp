
import { Paper, styled, type PaperProps } from "@mui/material";
import type { FunctionalComponent } from "preact";


const CustomPaper = styled(Paper)<PaperProps>(() => ({
    width: '100%',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
}));

const MUIPaper: FunctionalComponent<PaperProps> = ({ children, ...rest }) => {


    return (
        <CustomPaper {...rest}>
            {children}
        </CustomPaper>
    );
}

export default MUIPaper;