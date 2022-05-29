import { useEffect, useState } from "react";
import axiosClient from "../config/AxiosClient";
import { Grid } from "@mui/material";

//Components
import { InputSelect } from "./InputSelect";
import { InputSearc } from "./InputSearc";
import { Cards } from "./Cards";

export const Home = () => {
  const [world, setWorld] = useState([]);
  const [age, setAge] = useState("");
  const [filterData, setFilterData] = useState([]);

  const getWorld = async () => {
    try {
      const { data } = await axiosClient.get(`/all`);
      setWorld(data);
      setFilterData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getWorld();
  }, []);

  useEffect(() => {
    const getRegion = async () => {
      try {
        const { data } = await axiosClient.get(`/region/${age}`);
        setWorld(data);
        setFilterData(data);
      } catch (e) {
        console.log(e);
      }
    };
    if (age !== "") {
      getRegion();
    }
  }, [age]);

  return (
    <>
      <Grid container>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          sx={{ padding: "1em 3px 30px 5px" }}
        >
          <InputSearc setFilterData={setFilterData} world={world} />
          <InputSelect age={age} setAge={setAge} />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" alignContent="center" spacing={2}>
        {filterData.map((i) => (
          <Cards world={i} />
        ))}
      </Grid>
    </>
  );
};
