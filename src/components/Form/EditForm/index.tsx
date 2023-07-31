import { Input } from "../Input";
import { ButtonClose, ButtonModal } from "../../Buttons";
import { ContactContext } from "../../../providers/ContactContext/ContactContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Modal } from "../../Modal";
import { LoginDataEdit, schema } from "./validations";
import { StyledEdit } from "./styled";


export interface ModalEditProps {
  toggleModal: () => void
}

export const EditForm = ({toggleModal}: ModalEditProps) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginDataEdit>({resolver: zodResolver(schema)});

  
    const {editContact, id} = useContext(ContactContext)

    const editarContact = async(data: LoginDataEdit) => {
        editContact(data, id);
        toggleModal()
    };
    return (
      <Modal toggleModal={toggleModal}>
      <StyledEdit>
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
        <ButtonModal name={"Salvar Alterações"}/>
      </form>
      </StyledEdit>
      
      </Modal>
    );
  };