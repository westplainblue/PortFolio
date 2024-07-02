import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

interface MediaCardProps {
    image: string;
    title: string;
    description: string;
    Link: string;

}

const MediaCard: React.FC<MediaCardProps> = ({image,title,description}) => {
        return (
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" >
                Link
              </Button>
            </CardActions>
          </Card>
        );

}

export default MediaCard;