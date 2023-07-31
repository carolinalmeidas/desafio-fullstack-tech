import { createContext, useState } from "react";
import {
  ContactContextProvider,
  ContactData,
  ContactResponse,
  IDefaultProvideProps,
} from "./type";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { LoginDataEdit } from "../../components/Form/EditForm/validations";



export const ContactContext = createContext({} as ContactContextProvider);

export const ContactProvider = ({ children }: IDefaultProvideProps) => {
  const [contacts, setContacts] = useState<ContactResponse[]>([]);
  const [listContacts, setListContacts] = useState<ContactResponse[]>([]);
  const [modal, setModal] = useState(false);
  const [modalRegister, setModalRegister] = useState(false)
  const [id, setId] = useState();

  const toggleModal = () => setModal(!modal)
  const toggleModalRegister = () => setModalRegister(!modalRegister)

  const createContact = async (data: ContactData): Promise<void> => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const newContact = await api.post("/contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(newContact.data);
      toast.success("Contato criado com sucesso");
    } catch (error) {
      toast.error("Algo deu errado!!");
    }
  };

  const renderContact = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const token = localStorage.getItem("@TOKEN");
        const response = await api.get("/contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setListContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editContact = async (updatedData: LoginDataEdit, id:number) => {
    if (Object.values(updatedData).every((value) => value === "")) {
      toast.info("Nenhum campo foi preenchido, nenhuma alteração realizada.");
    }else{
      try {
        const token = localStorage.getItem("@TOKEN");
        const response = await api.patch(`/contacts/${id}`, updatedData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const updatedContacts = listContacts.map((contact) => {
          if (id === contact.id) {
            return { ...contact, ...updatedData };
          } else {
            return contact;
          }
        });
        setContacts(updatedContacts);
        toast.success("Contato editado com sucesso");
      } catch (error) {
        toast.success("Algo deu errado!!");
      }
    }
    
  };

  const deleteContact = async (id: number) => {
    try {
      const token = localStorage.getItem("@TOKEN")

      const remove = await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newListContatc = listContacts.filter((contatc) => contatc.id !== id);
      setListContacts(newListContatc);
      toast.success("Contato excluido com sucesso");
    } catch (error) {
      toast.error("Algo deu errado!!");
    }
  };

  return (
    <>
    <ContactContext.Provider
      value={{
        renderContact,
        listContacts,
        createContact,
        contacts,
        setContacts,
        toggleModal,
        setListContacts,
        editContact,
        id,
        setId,
        modal,
        deleteContact,
        modalRegister,
        toggleModalRegister
      }}
    >
      {children}
    </ContactContext.Provider>
    <ToastContainer
        position="top-right"
        autoClose={2000}
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

  );
};
