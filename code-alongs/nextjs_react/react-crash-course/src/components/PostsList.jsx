import Post from './Post';
import classes from './PostsList.module.css'

function PostsList() {
    return (
    <ul className={classes.posts}>
        <Post author="Crispy C" body="React.js is a test of patience"/>
        <Post author="Alexander Ocheeva" body="Don't forget too like an subscribe"/>
    </ul>
    );
}

export default PostsList;