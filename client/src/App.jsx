import "./App.css";
import { useEffect } from "react";
import memories from "./images/memories.png";
import { Form } from "./components/Form/Form";
import { Posts } from "./components/Posts/Posts";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from './actions/posts';

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Pathways&Pixels
        </Typography>
        <img className={classes.image} src={memories} alt="logo" height={60} />
      </AppBar>
      <Grow in>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
