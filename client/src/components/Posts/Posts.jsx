import {Post} from './Post/Post.jsx'
import useStyles from './styles';
import { useSelector } from 'react-redux';

export const Posts = () => {

    const classes = useStyles();
    const posts = useSelector((state) => state.posts);

    console.log(posts);

  return (
    <div>
        <Post />
    </div>
  )
}
