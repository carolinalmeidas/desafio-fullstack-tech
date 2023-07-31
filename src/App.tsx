import { ContactProvider } from "./providers/ContactContext/ContactContext"
import { UserProvider } from "./providers/UserContext/UserContext"
import { Router } from "./routes"
import GlobalStyle from "./styles/GlobalStyle"

export const App = () => {
  return(
    <>
      <UserProvider>
        <ContactProvider>
        <GlobalStyle />
        <Router/>  
        </ContactProvider>
      </UserProvider>
    </>
  )
}

