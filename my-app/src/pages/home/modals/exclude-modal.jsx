import { Modal, Button, Image } from "react-bootstrap";
import { useState } from "react";
import "./styles.css";

export default function ExcludeModal({ onDelete }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="popover-button" onClick={handleShow}>
        Excluir
      </button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Excluir Paciente?</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          <Image src="/images/exclude-foto.svg" alt="exclude-foto" />
          <br />
          <p>Tem certeza que deseja excluir o paciente selecionado.</p>
          <br />
          <strong>Essa ação não poderá ser desfeita.</strong>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={onDelete} variant="danger">
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
