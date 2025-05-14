import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

function PostsList() {
     {/* To meet the requirement .jsx has regarding child elements we must first import 'NewPost' and or the desired import.
       * Next we wrap those elements inside an empty element aka 'fragment' <> </> as sibling elements aren't allowed.  
       * This ensures that we only have one root element inside the return statement.
       */}
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Crispy C" body="React.js is a test of patience"/>
                <Post author="Alexander Ocheeva" body="Don't forget too like an subscribe"/>
            </ul>
        </>
    );
}

export default PostsList;