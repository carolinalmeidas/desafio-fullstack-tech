import { SubmitHandler, useForm } from "react-hook-form";
import { LoginData, schema } from "./validations";
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { Input } from "../Input";
import { Button } from "../../Buttons";
import { StyledLogin } from "./styled";


export const LoginForm = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginData>({resolver: zodResolver(schema)});
  
    const { userLogin } = useContext(UserContext);
    
    const submit: SubmitHandler<LoginData> = (data) => {
        userLogin(data);
    };
    return (
      <StyledLogin>
      <h2>Faça seu login</h2>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          id="email"
          label='E-mail'
          type='email'
          register={register("email")}
          error={errors.email}
        />
        <Input
          id="password"
          label='Senha'
          type='password'
          register={register("password")}
          error={errors.password}
        />
        <Button  name={"Entrar"}  />
      </form>
      </StyledLogin>
    );
  };