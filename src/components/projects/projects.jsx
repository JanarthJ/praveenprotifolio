import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Projects(props) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'black',border:'1px solid white',boxShadow: 'rgba(255, 255, 255, 0.25) 0px 54px 55px, rgba(255, 255, 255, 0.12) 0px -12px 30px, rgba(255, 255, 255, 0.12) 0px 4px 6px, rgba(255, 255, 255, 0.17) 0px 12px 13px, rgba(255, 255, 255, 0.09) 0px -3px 5px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imgsource}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{color:'white'}} gutterBottom variant="h5" component="div">
            <p>{props.title}</p>
          </Typography>
          <Typography variant="body2" color="white">
            <div><h4>{props.Lang}</h4></div>
            <br></br>
            <div>{props.description}
            </div>
    
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" style={{color:'white'}}>
          See more
        </Button>
      </CardActions>
    </Card>
  );
}
