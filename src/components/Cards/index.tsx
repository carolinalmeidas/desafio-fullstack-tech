import { useContext, useEffect } from "react";
import { StyledSection } from "./styled";
import { ContactContext } from "../../providers/ContactContext/ContactContext";
import { Cart } from "./Card";

const Cards = () => {
  const {listContacts, renderContact} = useContext(ContactContext)

  useEffect(() => {
    renderContact()
  }, [renderContact])
 
  
  return (
    <StyledSection>
      <ul>
        {listContacts.map((contact) => (
           <Cart key={contact.id} contact={contact} />
        ))}
      </ul>
    </StyledSection>
  );
};
export default Cards;