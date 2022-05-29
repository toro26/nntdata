import { FormControl, Grid, InputLabel, MenuItem, Paper, Select } from "@mui/material";

export const InputSelect = ({age, setAge}) => {

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Grid item xs={12} md={2} lg={2} sm={6}>
      <Paper
        elevation={3}
        sx={{ backgroundColor: "#2B3743", color: "#FFFFFF" }}
      >
        <FormControl fullWidth>
          <InputLabel sx={{ color: "#FFFFFF" }}>Región</InputLabel>
          <Select value={age} onChange={handleChange} sx={{ color: "#FFFFFF" }}>
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"Americas"}>Americas</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Grid>
  );
};
