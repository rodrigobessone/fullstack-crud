import { useContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEdit } from '@fortawesome/free-solid-svg-icons'
import { api } from "../../../services/Api"
import { UserContext } from "../../../providers/UserContext/UserContext"
import { StyledCardList } from "./StyledCardList"
import { StyledCardDiscardButton } from "../../Buttons/StyledCardDiscardButton"
import { StyledCardEditDetailsButton } from "../../Buttons/StyledCardEditDetailsButton"
import { UpdateModal } from "./UpdateModal"
import { IContactCardProperties } from "../../../providers/UserContext/ContactContext.tsx/@types"
import { StyledButtonsDiv } from "./StyledButtonsDiv"

export const ContactPeekCard = ({ contact }: IContactCardProperties) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);
  const { setGlobalLoading } = useContext(UserContext)

  const openModal = () => {
      setSelectedContactId(String(contact.id))
      setIsModalOpen(true);
      };

  const closeModal = () => {
    setSelectedContactId(null)
    setIsModalOpen(false);
  };
  
  const handleDeleteContact = async () => {

    setGlobalLoading(false)

    try {
        await api.delete(`contact/${contact.id}`);
        setGlobalLoading(true)
    }
    catch (error) {
      console.log('Erro ao buscar dados do contato')
    }
  }

  return (
    <StyledCardList key={contact.id}> 
      <p>Nome: {contact.name}</p>
      <p>E-mail: {contact.email}</p>
      <p>Telefone: {contact.contactNumber}</p>
      <StyledButtonsDiv>
        <StyledCardEditDetailsButton onClick={openModal}>
          <FontAwesomeIcon icon={faEdit} /> Editar
        </StyledCardEditDetailsButton>
        <StyledCardDiscardButton onClick={() => handleDeleteContact()}>
          <FontAwesomeIcon icon={faTrashCan} /> Remover
        </StyledCardDiscardButton>
      </StyledButtonsDiv>
      {isModalOpen && (
        <UpdateModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          contactId={selectedContactId !== null ? parseInt(selectedContactId, 10) : null}
        />
      )}
    </StyledCardList>
  )
}

