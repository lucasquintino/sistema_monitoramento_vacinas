import styled from "styled-components";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  /* position: absolute;
  z-index: 0; */
  h1 {
    font-size: 22px;
    font-weight: lighter;
    color: #222;
  }
  h2 {
    font-size: 18px;
    font-weight: lighter;
    color: #222;
  }
`;

export const useStyles = makeStyles(theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      background: "#eff0f2",
      flexGrow: 1,
      width: 1,
      height: "100vh",
      padding: theme.spacing(3),
      "@media (max-width:480px)": {
        padding: theme.spacing(2),
      },
    },
    formControl: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      minWidth: '100%'

    },
    selectEmpty: {
      margin: theme.spacing(2),
    },
    select: {
      background: "var(--branco)"
    },
    inputLabel: {
      "&.Mui-focused": {
        color: "var(--laranja_escuro)",
      },
    },
  })
);
