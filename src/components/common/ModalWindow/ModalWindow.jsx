import { useEffect } from 'react';
import style from './ModalWindow.module.css'

const ModalWindow = ({setIsActive, children, width}) => {
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
      <div className={style.modal__content} style={{width: `${width}px`}} onClick={evt => evt.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
 
export default ModalWindow;