import React, { useState, useEffect, useMemo } from "react";
import { useStyles } from "./styles";
import Layout from "../../components/Layout";
import Table from "../../components/Table";

import { Columns } from "./columns";
const Freezers = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <Layout />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Table title={"Vacinas"} columns={Columns} />
        </main>
      </div>
    </div>
  );
};

export default Freezers;
