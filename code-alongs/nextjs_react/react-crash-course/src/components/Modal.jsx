import classes from './Modal.module.css';

/* function Modal(props) {
    return ( 
        <>
            <div className={classes.backdrop}/>
            <dialog className={classes.modal}>{props.children}</dialog> 
        </>
    );
} */

function Modal({ children }) { // Instead of using "props." we can use obj. destructuring
    return ( 
        <>
            <div className={classes.backdrop}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog> 
        </>
    );
}

export default Modal;