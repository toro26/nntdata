import { Typography, CardContent, CardMedia, Card, Grid } from "@mui/material";
import { useState } from "react";
import { Modal } from "./Modal";

export const Cards = ({ world }) => {
  const [modal, setModal] = useState(false);

  const { name, capital, population, region, flags } = world;
  return (
    <Grid item xs={12} md={3} lg={3} sm={6}>
      <Card
        sx={{ maxWidth: 345, backgroundColor: "#2B3743" }}
        elevation={5}
        onClick={() => setModal(true)}
      >
        <CardMedia
          component="img"
          height="194"
          image={flags.svg}
          alt="IconFlag"
        />
        <CardContent>
          <Typography variant="h6" component="div" color="#FFFFFF">
            {name.official}
          </Typography>
          <Typography variant="body2" color="#FFFFFF">
            Population: {population}
          </Typography>
          <Typography variant="body2" color="#FFFFFF">
            Region: {region}
          </Typography>
          <Typography variant="body2" color="#FFFFFF">
            Capital: {capital}
          </Typography>
        </CardContent>
      </Card>
      {modal && <Modal modal={modal} setModal={setModal} world={world} />}
    </Grid>
  );
};
