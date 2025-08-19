import { Button, Card, CardActions, CardContent, CardMedia, styled, Typography, type CardProps } from "@mui/material";
import type { FunctionalComponent } from "preact";


interface MUICardProps extends CardProps {
    title?: string,
    description?: string,
    image?: string
}

const CustomCard = styled(Card)<CardProps>(() => ({
    width: '100%',
    maxWidth: '400px',
    minWidth: '300px'
}));

const MUICard: FunctionalComponent<MUICardProps> = ({
    title,
    description,
    image,
    ...rest
}) => {

    const { VITE_PROXY_STATIC } = import.meta.env;


    return (
        <CustomCard {...rest}>
            <CardMedia
                sx={{ height: '200px' }}
                image={`${VITE_PROXY_STATIC}/${image ?? ''}`}
                title={title ?? ''}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title ?? ''}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description ?? ''}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </CustomCard>
    );
}

export default MUICard;