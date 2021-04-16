import React, { useState, useEffect, useMemo } from "react";
import { useStyles } from "./styles";
import Layout from "../../components/Layout";

const Managers = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Layout />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <h2>Gestores</h2>
        </main>
      </div>
    </div>
  );
};

export default Managers;
