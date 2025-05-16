import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

function Modal({ children }) { // Instead of using "props." we can use obj. destructuring
    const navigate = useNavigate();
    function closeHandler() {
        navigate('..');
    }

    return ( 
        <>
            <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog> 
        </>
    );
}

export default Modal;