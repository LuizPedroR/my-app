import { Modal, Tabs, Tab, Button } from "react-bootstrap";
import ModalInfoSection from "./info-section";
import ModalContactSection from "./contact-section";
import "./styles.css";

export default function InformationModal({ isVisible = false, onClose }) {
  return (
    <Modal
      dialogClassName="modal-height modal-dialog modal-dialog-centered modal-dialog modal-lg"
      onHide={onClose}
      show={isVisible}
    >
      {/* modal com os outros componentes de modais para melhor repartição do codigo */}
      <Modal.Body>
        <Tabs defaultActiveKey="info" className="mb-3">
          <Tab className="" eventKey="info" title="Informações Básicas">
            <ModalInfoSection />
          </Tab>
          <Tab className="" eventKey="contact" title="Contato">
            <ModalContactSection />
          </Tab>
        </Tabs>
        <Modal.Footer>
          <Button variant="primary " onClick={onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
}
