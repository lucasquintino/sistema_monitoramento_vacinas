import React, { useState, useEffect, useMemo } from "react";
import { useStyles } from "./styles";
import Layout from "../../components/Layout";

const Vaccines = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Layout />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <h2>Vaccines</h2>
        </main>
      </div>
    </div>
  );
};

export default Vaccines;
