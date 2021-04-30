/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from "react";
import to from "await-to-js";
import { useStyles, Container } from "./styles";
import { withStyles } from "@material-ui/core/styles";

import Switch, { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";

const GiveUpFilter    = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = ( event ) => {
    setChecked(event.target.checked);
  };

  const CustomSwitch = withStyles({
    root:{
      left: -8
    },
    switchBase: {
      color: "var(--cinza)",
      "&$checked": {
        color: "var(--laranja_escuro)",
      },
      "&$checked + $track": {
        backgroundColor: "var(--laranja_escuro)",
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <Container>
      {console.log(checked)}
      <h2>Apenas quem solicitou desistência:</h2>
      <CustomSwitch
        checked={checked}
        onChange={handleChange}
        name="checkedA"
      />
    </Container>
  );
};

export default GiveUpFilter;
