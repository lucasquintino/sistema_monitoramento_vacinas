/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from "react";
import to from "await-to-js";
import { useStyles, Container } from "./styles";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";


const EventFilter = () => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);

 
  const handleChange = (event) => {
    const id = event.target.value;
    setState(id);
  };


  return (
    <Container>
      <h2>Selecionar o evento:</h2>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel} htmlFor="event-id">
          Evento
        </InputLabel>
        <Select
          className={classes.select}
          value={state}
          onChange={handleChange}
          label="Evento"
          inputProps={{
            name: "Evento",
            id: "event-id",
          }}
        >
          <MenuItem aria-label="None" value="" />
          
        </Select>
        <FormHelperText>
          Será visualizado somente as informações do evento selecionado
        </FormHelperText>
      </FormControl>
    </Container>
  );
};

export default EventFilter;
