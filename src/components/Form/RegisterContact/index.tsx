import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactContext } from "../../../providers/ContactContext/ContactContext"
import { ContactData } from "../../../providers/ContactContext/type"
import { StyledRegisterContact } from "./styled";
import { Input } from "../Input";
import { schema } from "./validations";
import { ButtonClose, ButtonModal } from "../../Buttons";

import { Modal } from "../../Modal";

interface ModalCreateProps{
    toggleModalRegister: () => void
}

export const RegisterContact = ({toggleModalRegister}: ModalCreateProps) => {
    
    const {
        register,
        handleSubmit,
        formState: {errors},
      } = useForm<ContactData>({resolver: zodResolver(schema)});

    const {createContact} = useContext(ContactContext)
   
    
    const registerContact = async(data:ContactData) => {
        createContact(data);
        toggleModalRegister()
    };
    
    return(
        <>
        <Modal toggleModal={toggleModalRegister}>
        <StyledRegisterContact>
            <div>
            <h2>Novo Contato</h2>
            <ButtonClose toggleModal={toggleModalRegister} />
            </div>
            <form onSubmit={handleSubmit(registerContact)}>
                <Input label="Digite o nome:" id="name" type="name" register={register("name")} error={errors.name}/>
                <Input label="Digite o e-mail:" id="email" type="email" register={register("email")} />
                <Input label="Digite o telefone:" id="phone" type="phone" register={register("phone")} />
                <ButtonModal name={"Cadastrar contato"} />
            </form>
        </StyledRegisterContact>
        </Modal>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        </>
    )
}