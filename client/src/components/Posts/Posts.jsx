import React from 'react'
import {Post} from './Post/Post.jsx'
import useStyles from './styles';

export const Posts = () => {

    const classes = useStyles();

  return (
    <div>
        <Post />
    </div>
  )
}
