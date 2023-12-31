import { Form, Col, Row } from "react-bootstrap";
import { useState } from "react";
import "./styles.css";

/* Função interna para fazer a atualização automatica na hora de escolher a foto de perfil na area de informações do cliente */
export function ImageClient() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="App">
      <input id="select-avatar" type="file" onChange={handleChange} />
      <label alt="User-placeholder" className="avatar" htmlFor="select-avatar">
        <img src={file} />
      </label>
    </div>
  );
}

export default function ModalInfoSection() {
  return (
    <>
      <ImageClient />
      <Form>
        <Row className="mb-3 ">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Paciente</Form.Label>
            <Form.Control id="name" type="text" placeholder="Digite" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Apelido</Form.Label>
            <Form.Control type="text" placeholder="Digite" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Nascionalidade</Form.Label>
            <Form.Control type="text" placeholder="Digite" />
          </Form.Group>
        </Row>
        <Row className="mb-3 ">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Nascimento</Form.Label>
            <Form.Control
              id="dataNascimento"
              type="date"
              placeholder="Digite"
            />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control id="cpf" type="text" placeholder="Digite" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3">
            <Form.Label>RG</Form.Label>
            <Form.Control type="text" placeholder="Digite" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Gênero</Form.Label>
            <Form.Select defaultValue="Sem Filtro">
              <option>Sem FIltro</option>
              <option>Masculino</option>
              <option>Feminino</option>
              <option>Outro</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado Civil</Form.Label>
            <Form.Select defaultValue="Sem Filtro">
              <option>Sem FIltro</option>
              <option>Solteiro</option>
              <option>Casado</option>
              <option>Outro</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState"></Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3">
            <Form.Label>Observações Adicionais</Form.Label>
            <Form.Control size="lg" type="text" placeholder="Digite" />
          </Form.Group>
        </Row>
      </Form>
    </>
  );
}
