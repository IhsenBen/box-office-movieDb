import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = (props: any) => {
    const backdropDiv = document.getElementById('backdrop-hook') as HTMLElement;
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    backdropDiv
  );
};

export default Backdrop;