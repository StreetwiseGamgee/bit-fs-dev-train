import {useState} from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';

function PostsList({isPosting, onStopPosting}) {
    
    // let modalContent;
    // if (modalIsVisible) {
    //     modalContent = (
    //         <Modal onClose={hideModalHandler}>
    //             <NewPost onBodyChange={bodyChangeHandler} 
    //                     onAuthorChange={authorChangeHandler}
    //             />
    //         </Modal>
    //     );
    // }
    
    return (
        <> {/*Empty element acting as wrapper for sibling elements as they cannot be stored in root. */}
            {isPosting && ( 
                <Modal onClose={onStopPosting}>
                   <NewPost onCancel={onStopPosting} />
               </Modal>
            )}
            <ul className={classes.posts}>
                <Post author="Streetwise Gamgee" body="Don't forget too like an subscribe"/>
            </ul>
        </>
    );
}

export default PostsList;