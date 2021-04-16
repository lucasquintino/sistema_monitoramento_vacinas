import styled from 'styled-components';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

export const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;

  .header {
    padding: 0;
  }
`;

export const Title = styled.div`
  font-size: 26px;
  color: #ff4000;
  font-family: "Roboto slab", sans-serif;
  text-align: center;
  padding: 30px 0;
`;

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      background: '#eff0f2',
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