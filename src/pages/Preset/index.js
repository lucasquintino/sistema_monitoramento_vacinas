/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";

import { useStyles, Container } from "./styles";

import EventFilter from "./components/EventFilter";
import GiveUpFilter from "./components/GiveUpFilter";
import QuantityFilter from "./components/QuantityFilter";

import FilterIcon from "@material-ui/icons/FilterList";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const Preset = () => {
  let history = useHistory();
  const classes = useStyles();
  const [stateEvent, setStateEvent] = useState(null);

  const handleFilter = () => {
    console.log(history);
    const path = history.location.pathname;
    const newPath = path.replace("filtrar", "listar");
    history.push({
      pathname: newPath,
      state: { ...history.location?.state, event: stateEvent },
    });
  };

  // const [state, setState] = React.useState<{
  //   age: string | number;
  //   name: string;
  // }>({
  //   age: "",
  //   name: "hai",
  // });

  // const handleChange = (
  //   event: React.ChangeEvent<{ name?: string; value: unknown }>
  // ) => {
  //   const name = event.target.name as keyof typeof state;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };

  console.log(stateEvent);

  return (
    <div className={classes.root}>
      <Layout />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container>
          <EventFilter state={stateEvent} setState={setStateEvent} />
          {/* <GiveUpFilter />
          <QuantityFilter title='Numero de parcelas'/> */}

          <button disabled={!stateEvent} onClick={handleFilter}>
            Filtrar &nbsp;
            <FilterIcon />
          </button>
        </Container>
      </main>
    </div>
  );
};

export default Preset;
