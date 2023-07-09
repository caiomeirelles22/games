import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function GameCard({ title, thumbnail, game_url, genre }) {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: '#232323', color:'white' }}  >
            <CardActionArea>
                <CardContent>

                    <CardMedia
                        component="img"
                        height="200"
                        image={thumbnail}
                        alt={title}
                    />
                    <Typography gutterBottom variant="h4" component="div">
                        {title}
                    </Typography>

                    <Typography gutterBottom variant="h6" component="div">
                        {genre}
                    </Typography>

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href={game_url}>Site Oficial</a>
                </Button>
            </CardActions>
        </Card>
    );
}
