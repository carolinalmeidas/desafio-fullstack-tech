import { StyledHeader } from "./styled";
import { ButtonLogout } from "../Buttons";
import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { UserContext } from "../../providers/UserContext/UserContext";

const Header = () => {

  const{toggleModalRegister} = useContext(ContactContext)
  const {toggleModalUser, deleteUser, idUser} = useContext(UserContext)


  return (
    <StyledHeader>
      <h1>CONTACTS</h1>
      <div>
        <button onClick={() => {toggleModalRegister()}}>Cadastrar Contato</button>
        <button onClick={() => {toggleModalUser()}}>Editar Usuário</button>
        <button onClick={() => {deleteUser(idUser)}}>Excluir Usuário</button>
        <ButtonLogout/>
      </div>
    </StyledHeader>
  );
};
export default Header;
