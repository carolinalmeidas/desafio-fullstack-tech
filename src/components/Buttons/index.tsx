import { useContext } from "react"
import { StyledButton,StyledButtonHeader, StyledButtonLogout, StyledButtonClose } from "./styled"
import { UserContext } from "../../providers/UserContext/UserContext"

export const Button = ({name}: any) => {
    return(
        <StyledButton type="submit">{name}</StyledButton>
    )
}

export const ButtonLogout = () => {
    const {userLogout} = useContext(UserContext)
    return(
        <StyledButtonLogout onClick={() => {userLogout()}}>Sair</StyledButtonLogout>
    )
}

export const ButtonHeader = ({name}: any) => {
   
    return(
        <StyledButtonHeader>{name}</StyledButtonHeader>
    )
}


export const ButtonModal = ({name}) => {
    return(
        <StyledButtonHeader type="submit">{name}</StyledButtonHeader>
    )
}


export const ButtonClose = ({toggleModal}) => {
    return(
        <StyledButtonClose type="button" onClick={toggleModal}>x</StyledButtonClose>
    )
}
