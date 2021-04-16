import React, { useState, useEffect, useMemo } from "react";
import { useStyles } from "./styles";
import Layout from "../../components/Layout";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Layout />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <h2>Dashboard</h2>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
