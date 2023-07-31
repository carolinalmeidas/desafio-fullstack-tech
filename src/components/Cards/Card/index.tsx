import {  useContext } from "react";
import { ContactResponse } from "../../../providers/ContactContext/type";
import { StyledList } from "./styled";
import { ContactContext } from "../../../providers/ContactContext/ContactContext";



export const Cart = ({ contact }: ContactResponse) => {
  const { id, name, email, phone } = contact;
  const { setId, toggleModal, deleteContact } = useContext(ContactContext);
  return (
    <StyledList>
      <div>
        <h2>{name}</h2>
        <span>Email: {email}</span>
        <p>Telefone: {phone}</p>
      </div>
      <div className="buttons">
        <button
          onClick={() => {toggleModal(); setId(id);}}
        >
          Editar Contato
        </button>
        <button
          onClick={() => {
            setId(id);
            deleteContact(id);
          }}
        >
          Deletar Contato
        </button>
      </div>
    </StyledList>
  );
};
