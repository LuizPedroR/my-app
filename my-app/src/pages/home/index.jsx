import React, { useEffect, useState } from "react";
import { Table, Button, OverlayTrigger, Popover, Form } from "react-bootstrap";
import "./modals/styles.css";
import InformationModal from "./modals/information-modal";
import ExcludeModal from "./modals/exclude-modal";

const USER_DATA = {
  nome: "John Doe",
  cpf: "999.999.999-99",
  dataNascimento: "15/02/2023",
  email: "teste@gestaods.com.br",
  cidade: "Santa Maria",
};
/* Como não utilizei um banco de dados, foi nescessario criar um id juntamente para funcionar de key, uma vez que todos os elementos tinham os mesmos valores.*/
export const USER_ARRAY = Array.from({ length: 10 }).map((_, i) => ({
  ...USER_DATA,
  id: i + 1,
}));

/* Funcionalidade do popover */
const renderPopover = (onEdit, onDelete) => (
  <Popover arrowProps={{ style: { display: "none" } }} id="actions-popover">
    <Popover.Body className="d-flex flex-column p-0 overflow-hidden">
      <button className="popover-button" onClick={onEdit}>
        Editar
      </button>
      <ExcludeModal onDelete={onDelete} />
    </Popover.Body>
  </Popover>
);

/* Aqui foram criados diferentes tipos de estados, o ModalVisible para monitorar o modal para não aparecer logo que o site é aberto, juntamente com o 
userList que é utilizado para a manutenção da lista em tempo real*/
export default function Home() {
  const [userList, setUserList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = (toggle) => {
    setIsModalVisible((prevState) =>
      toggle === undefined ? !prevState : toggle
    );
  };

  /* Chamadas para o controle das modais */
  const openModal = () => toggleModal(true);

  const closeModal = () => toggleModal(false);

  const editUser = (user) => () => {
    openModal(user);
  };

  /* utilizei o filter para alterar a lista uma vez que ele não afeta o array atual, apenas cria um novo array mantendo o antigo, assim a função 
  que monitora o array da lista pode atualizar ela sem a reinicialização da pagina*/
  const onDelete = (user) => () => {
    console.log(user);
    setUserList((prevState) => prevState.filter(({ id }) => id !== user.id));
  };

  useEffect(() => {
    console.log("isModalVisible ===", isModalVisible);
  }, [isModalVisible]);

  useEffect(() => {
    console.log("COMPONENT MOUNTED");
    setUserList(USER_ARRAY);
  }, []);

  return (
    <div className="fundo-site d-flex flex-column align-items-center w-100 h-100">
      <header>
        <img src="/images/gestaods-logo.png" alt="gestaods" />
      </header>
      <main className="content-container rounded">
        <section className="d-flex justify-content-end">
          <Form.Control type="text" placeholder="Search" />
          <Button onClick={openModal}>Adicionar Paciente</Button>
        </section>
        <Table striped className="w-100">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Data de Nascimento</th>
              <th>E-mail</th>
              <th>Cidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {/* map utilizando o user id para meplhor observação quando for excluido
            um componente da lista */}
            {userList.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.nome} {user.id}
                </td>
                <td>{user.cpf}</td>
                <td>{user.dataNascimento}</td>
                <td>{user.email}</td>
                <td>{user.cidade}</td>
                <td>
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={renderPopover(editUser(user), onDelete(user))}
                  >
                    <button className="action-btn">...</button>
                  </OverlayTrigger>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <InformationModal isVisible={isModalVisible} onClose={closeModal} />
      </main>
    </div>
  );
}
