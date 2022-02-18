import Modal from './Modal';

const ErrorModal = (props: any) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<button onClick={props.onClear}>Close</button>}
    >
      <p>{props.errorMsg}</p>
    </Modal>
  );
};

export default ErrorModal;
