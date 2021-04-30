import { Background } from "./../../../Login/styles";
import styled from "styled-components";
import { makeStyles, Theme, createStyles, withStyles } from "@material-ui/core/styles";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

export const Container = styled.div`
  /* position: absolute;
  z-index: 0; */
  margin-bottom: 8px;
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
  })
);