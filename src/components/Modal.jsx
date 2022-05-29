import {
  Grid,
  Dialog,
  CardMedia,
  Typography,
  CardContent,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Modal = ({ modal, setModal, world }) => {
  const { name, subregion, population, region, flags, capital, tld } = world;

  return (
    <Dialog
      open={modal}
      onClose={() => setModal(false)}
      fullWidth
      maxWidth={"md"}
      PaperProps={{
        style: {
          // borderRadius: "15px",
          overflow: "hidden",
          "&::WebkitScrollbar": {
            display: "none",
          },
          backgroundColor: "#212E37",
        },
      }}
    >
      <Grid item xs={2} sx={{ display: "flex", justifyContent: "start", padding: "2em 0px 0px 50px" }}>
        <IconButton
          size="small"
          onClick={() => setModal(false)}
          aria-label="show more"
        >
          <ArrowBackIcon
            sx={{
              color: "#FFFFFF",
            }}
          />
          <Typography variant="h6" component="div" color="#FFFFFF">
            Atrás
          </Typography>
        </IconButton>
      </Grid>
      <Grid container>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          sx={{ padding: "2em 3px 40px 50px" }}
        >
          <Grid item xs={5} md={5} lg={5} sm={5}>
            <CardMedia
              component="img"
              height="194"
              image={flags.svg}
              alt="IconFlag"
            />
          </Grid>
          <Grid item xs={6} md={6} lg={6} sm={6}>
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
                Sub Region: {subregion}
              </Typography>
              <Typography variant="body2" color="#FFFFFF">
                Capital: {capital}
              </Typography>
              <Typography variant="body2" color="#FFFFFF">
                Top Level Domain: {tld}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
};
