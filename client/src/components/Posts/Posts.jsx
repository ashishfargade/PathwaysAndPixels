import { Post } from "./Post/Post.jsx";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

export const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};
