import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function AppCard({card}) {
  return (
    <Card sx={{ maxWidth: 345, margin: "5px", borderRadius: "1rem", height: "396px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="346px"
          width="292px"
          image= {card.card_img}
          alt="green iguana"
        />
        <CardContent sx={{marginTop: "-1rem"}}>
          <Typography gutterBottom variant="body2" color="text.secondary">
            {card.card_edu}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.card_height}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
