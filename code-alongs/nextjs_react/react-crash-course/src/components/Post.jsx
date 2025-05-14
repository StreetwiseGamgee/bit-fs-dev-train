import classes from './Post.module.css'; // Remember to place it in the right directory -_-

function Post(props) { 
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    );
}

export default Post;
