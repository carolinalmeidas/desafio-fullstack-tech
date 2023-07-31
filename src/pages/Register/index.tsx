
import { SubmitHandler, useForm } from "react-hook-form"
import {LoginDataRegister, schema } from "./validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { StyledRegister } from "./styled"
import { Input } from "../../components/Form/Input"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "../../components/Buttons"


export const Register = () => {

    const {
        register,
        handleSubmit,
        formState: {errors},
      } = useForm<LoginDataRegister>({resolver: zodResolver(schema)});

    const {userRegister} = useContext(UserContext)

    const submit: SubmitHandler<LoginDataRegister> = (data) => {
        console.log(data)
        userRegister(data);
    };
    return(
        <>
        <StyledRegister>
            <h2>Faça seu Cadastro</h2>
            <form onSubmit={handleSubmit(submit)}>
                <Input label="Digite seu nome:" id="name" type="name" register={register("name")} error={errors.name}/>

                <Input label="Digite seu e-mail:" id="email" type="email" register={register("email")} />

                <Input label="Digite sua senha:" id="password" type="password" register={register("password")} />

                <Input label="Digite seu telefone:" id="phone" type="phone" register={register("phone")} />

                <Button  name={"Cadastrar"}  />
            </form>
        </StyledRegister>
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