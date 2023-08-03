import { useContext, useEffect } from "react"
import { ContactContext } from "../../providers/ContactContext/ContactContext"
import Header from "../../components/Header"
import Cards from "../../components/Cards"
import { EditForm } from "../../components/Form/EditForm"
import { StyledDashboard } from "./styled"
import { RegisterContact } from "../../components/Form/RegisterContact"
import { UserContext } from "../../providers/UserContext/UserContext"
import { EditFormUser } from "../../components/Form/EditFormUser"


export const Dashboard = () => {

    const {modal, toggleModal, modalRegister, toggleModalRegister} = useContext(ContactContext)
    const { modalUser, toggleModalUser, renderUser} = useContext(UserContext)

    useEffect(() => {
        renderUser()
    },[renderUser])
 
    return(
        <>
        <Header />
        <StyledDashboard> 
            <h1>Veja seus contatos</h1>
        <Cards />
        {
            modal && <EditForm toggleModal={toggleModal} />
        }
        {
            modalRegister && <RegisterContact toggleModalRegister={toggleModalRegister} />
        }
        {
              modalUser && <EditFormUser toggleModal={toggleModalUser} />
        }
        </StyledDashboard>
        </>


    )
}