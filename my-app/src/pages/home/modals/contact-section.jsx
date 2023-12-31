import { Form, Row, Col } from "react-bootstrap";
import "./styles.css";

export default function ModalContactSection() {
  return (
    <body className="content-modal ">
      <div className="">
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" id="CEP">
            <Form.Label>CEP:</Form.Label>
            <Form.Control placeholder="Digite" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Cidade</Form.Label>
            <Form.Control type="email" placeholder="Digite" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>UF</Form.Label>
            <Form.Control type="email" placeholder="Digite" />
          </Form.Group>
        </Row>
        <Row className="mb-3 ">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="email" placeholder="Digite" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Número</Form.Label>
            <Form.Control type="email" placeholder="Digite" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Bairro</Form.Label>
            <Form.Control type="email" placeholder="Digite" />
          </Form.Group>
        </Row>
        <Row className="mb-3 ">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Complemento</Form.Label>
            <Form.Control type="email" placeholder="Digite" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3"></Form.Group>
          <Form.Group as={Col} className="mb-3"></Form.Group>
        </Row>
      </div>
    </body>
  );
}
