import { Input } from "../Input";
import { ButtonClose, ButtonModal } from "../../Buttons";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Modal } from "../../Modal";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { UserDataEditContact, schema } from "./validations";
import { StyledEditUser } from "./styled";


interface ModalEditProps {
  toggleModal: () => void
}

export const EditFormUser = ({toggleModal}: ModalEditProps) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<UserDataEditContact>({resolver: zodResolver(schema)});

  
    const {editeUser, idUser} = useContext(UserContext)

    const editarContact = async(data: UserDataEditContact) => {
      editeUser(data, idUser);
    };
    return (
      <Modal toggleModal={toggleModal}>
      <StyledEditUser>
        <div>
          <h2>Editar Contato</h2>
          <ButtonClose toggleModal={toggleModal} />
        </div>

        <form onSubmit={handleSubmit(editarContact)}>
        <Input
          id="name"
          label='Edite nome'
          type='text'
          register={register("name")}
          error={errors.name}
        />
          <Input
          id="phone"
          label='Edite o telefone'
          type='text'
          register={register("phone")}
          error={errors.phone}
        />
        <Input
          id="password"
          label='Edite sua senha'
          type='password'
          register={register("password")}
          error={errors.password}
        />
        <ButtonModal name={"Salvar Alterações"}/>
      </form>
      </StyledEditUser>
      
      </Modal>
    );
  };