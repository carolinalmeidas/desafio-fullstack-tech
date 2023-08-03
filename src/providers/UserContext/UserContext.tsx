import { createContext, useEffect, useState} from "react";
import {
  IDefaultProvideProps,
  IRegister,
  IUserContextProvider,
  IUserEdit,
  IUserResponse,
  LoginResponse,
} from "./type";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { LoginData } from "../../pages/Login/validations";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContextProvider);

export const UserProvider = ({ children }: IDefaultProvideProps) => {
  const [user, setUser] = useState<IUserResponse>()
  const [idUser, setIdUser] = useState()
  const [loading, setLoading] = useState(true)
  const [modalUser, setModalUser] = useState(false)

  const toggleModalUser = () => setModalUser(!modalUser)

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    if(!token){
      setLoading(false)
      return
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setLoading(false)
  }, [])

  const userRegister = async (data: IRegister): Promise<void> => {
    try {
      const response = await api.post('/users', data);
      console.log(data)
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      toast.success("Cadastro realizado com sucesso!");
      navigate('/');
    } catch (error) {
      navigate('/register')
      toast.error("Algo deu errado!!");
    }
  };
  

  const userLogin = async (data: LoginData): Promise<void> => {
    try {
      const response = await api.post<LoginResponse>("/login", data)
      localStorage.setItem("@TOKEN", response.data.token) 
      const {token} = response.data
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      navigate('/dashboard');
    } catch (error) {
      toast.error("E-mail ou senha inválidos!!");
    }

  };

  const  renderUser = async() => {
    const token = localStorage.getItem("@TOKEN")
    if(token){
      try {
        const token = localStorage.getItem("@TOKEN")
        const response = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
        setUser(response.data);
        setIdUser(response.data.id)
      } catch (error) {
        toast.error("Algo deu errado!!");
      }
    }
  }
  
  const userLogout = (): void => {
    setUser(undefined);
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };

  const editeUser = async (data: IUserEdit, id: number) => {
    if (Object.values(data).every((value) => value === "")) {
      toast.info("Nenhum campo foi preenchido, nenhuma alteração realizada.");
    }else{
      try {
        const token = localStorage.getItem("@TOKEN");
        const response = await api.patch(`/users/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const updatedUser = {
          ...user, 
          ...data,
        };
        setUser(updatedUser)
        toast.success("Usuário editado com sucesso");
        } catch (error) {
        toast.success("Algo deu errado!!");
      }
    }
  }

  const deleteUser = async (id: number) => {
    try {
      const token = localStorage.getItem("@TOKEN")

      const remove = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Usuário excluido com sucesso");
      setUser(undefined);
      localStorage.removeItem('@TOKEN');
      navigate('/');
    } catch (error) {
      toast.error("Algo deu errado!!");
    }
  };
  return (
    <>
    <UserContext.Provider value={{ userLogin, loading, user, renderUser, userLogout, userRegister, idUser, editeUser, modalUser, toggleModalUser, deleteUser, navigate, setUser}}>
      {children}
    </UserContext.Provider>
    </>

  );
};
