import { useEffect } from 'react';
import style from './Modal.module.css'

const Modal = ({setIsActive, children}) => {
  useEffect(() => {
    const handleEscKey = (evt) => {
      if (evt.keyCode === 27) {
        setIsActive(false);
      }
    }

    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [setIsActive]);

  return (
    <div className={style.modal__wrapper} onClick={() => setIsActive()}>
      <div className={style.modal__content} onClick={evt => evt.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
 
export default Modal;