/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from "react";
import to from "await-to-js";
import { useStyles, Container } from "./styles";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";


const QuantityFilter = ({ title }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState('1');

  const handleChange = (  ) => {
    if(Number(event.target.value) >= 1)
    setQuantity(event.target.value);
  };

  return (
    <Container>
      {console.log(quantity)}
      <h2>{title}</h2>
      <TextField
        className={classes.textField}
        defaultValue={1}
        value={quantity}
        onChange={handleChange}
        type="number"
        label="A partir de"
        id="outlined-basic"
        variant="outlined"
      />
    </Container>
  );
};

export default QuantityFilter;
