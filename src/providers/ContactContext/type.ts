import { ReactNode } from "react";
import { LoginDataRegister } from "../../pages/Register/validations";

export interface IDefaultProvideProps{
    children: React.ReactNode;
}

export interface ContactData{
    name: string,
    email: string,
    phone: string,
}

export interface ContactResponse{
    id: number,
    name: string,
    email: string,
    phone: string,
    createdAt: string,
}

export interface ModalProps {
    toggleModal: () => void
    children: ReactNode
    blockClosing: boolean
}


export interface ContactContextProvider{
    renderContact: () => Promise<void>,
    listContacts: ContactResponse[],
    createContact: (data: ContactData) => Promise<void>,
    contacts: ContactResponse[] | undefined,
    setContacts: React.Dispatch<React.SetStateAction<ContactResponse[]>>,
    toggleModal: () => void,
    setListContacts: React.Dispatch<React.SetStateAction<ContactResponse[]>>,
    editContact: (updatedData: LoginDataRegister, id: number) => Promise<void>,
    id: undefined,
    setId: React.Dispatch<React.SetStateAction<undefined>>,
    modal: boolean,
    deleteContact: (id: any) => Promise<void>,
    modalRegister: boolean,
    toggleModalRegister: () => void
}
 