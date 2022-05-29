import { useEffect, useState } from "react";
import { Grid, InputAdornment, Paper, Stack, TextField } from "@mui/material";

//icons
import SearchIcon from "@mui/icons-material/Search";

export const InputSearc = ({ setFilterData, world }) => {
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    if (searchWord.length !== 0) {
      const filterData = world.filter((i) => {
        return i.name.official.toUpperCase().includes(searchWord);
      });
      setFilterData(filterData);
    } else {
      setFilterData(world);
    }
  }, [searchWord]);

  return (
    <Grid item xs={12} md={2} lg={2} sm={6}>
      <Paper
        elevation={3}
        sx={{ backgroundColor: "#2B3743"}}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 1, md: 1 }}
          justifyContent="center"
        >
          <>
            <TextField
              variant="outlined"
              sx={{ backgroundColor: "#2B3743" }}
              inputProps={{
                style: {
                  color: "#FFFFFF",
                },
              }}
              size="mediun"
              placeholder="Buscar..."
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value.toUpperCase())}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      sx={{
                        color: "#FFFFFF",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
          </>
        </Stack>
      </Paper>
    </Grid>
  );
};
