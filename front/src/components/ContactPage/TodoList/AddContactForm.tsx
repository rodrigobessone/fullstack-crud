import { useContext, useState} from "react"
import { StyledHeader } from "../../StyledHeader/StyledHeader"
import { faAddressBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledContainerContact } from "./StyledContainerContact"
import { UserContext } from "../../../providers/UserContext/UserContext"
import { ContactList } from "./ContactList"
import { ContactContext } from "../../../providers/UserContext/ContactContext.tsx/ContactContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from 'react-router-dom'
import { StyledRegistrationContainer } from "../../FormRegister/StyledRegistrationContainer";
import { StyledHomePageDiv } from "./StyledHomePageDiv";
import { StyledTaskMenuContainer } from "./StyledTaskMenuContainer";
import { StyledHeaderToggleButton } from "../../Buttons/StyledHeaderToggleButton";
import { StyledTaskEditIcon } from "./StyledTaskEditIcon";
import { StyledHomeSpan } from "./StyledHomeSpan";
import { StyledTaskLink } from "./StyledTaskLink";
import { AddContactModal } from "../Modal/AddContactModal";
import { StyledDivButtons } from "../../Buttons/StyledDivButtons";

export const AddContactForm = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user } = useContext(UserContext);

    const { contactList } = useContext(ContactContext);
    
    const navigate = useNavigate()

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      const handleUserLogout = () => {
        localStorage.clear()
        navigate('/')
    }


    return (
        <>
            <StyledHomePageDiv>
            <StyledTaskMenuContainer>
                <StyledContainerContact >
                <div> 
                  <h2> Olá, {user?.name}</h2>
                  <StyledDivButtons>
                    <StyledHeaderToggleButton onClick={openModal}>
                    Cadastrar Contato
                    </StyledHeaderToggleButton>
                  <StyledTaskLink to={"/"} onClick={handleUserLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />Sair</StyledTaskLink>
                  </StyledDivButtons>
                </div>

                <StyledHomeSpan>
                    {contactList && contactList.length === 0 ? (
                      <h2>Não há contatos registrados. </h2>
                     ) : (
                        <ContactList />
                      )}
                </StyledHomeSpan>
                </StyledContainerContact>
                {isModalOpen && <AddContactModal isOpen={isModalOpen} closeModal={closeModal} />}
            </StyledTaskMenuContainer>      
            </StyledHomePageDiv>
        </>
      )
}


