import React, { useContext } from "react";
import { ContactContext } from "../../../providers/UserContext/ContactContext.tsx/ContactContext";
import { StyledContactList } from "./StyledTaskContactList";
import { IContact } from "../../../providers/UserContext/ContactContext.tsx/@types";
import { StyledTaskCard } from "./StyledTaskCard";
import { ContactPeekCard } from "../TodoCard/ContactPeekCard";

export const ContactList = () => {
  const { contactList } = useContext(ContactContext);

  return (
    <StyledContactList>
      <>
        <div>
          <h3>Contatos</h3>
        </div>
        <StyledTaskCard>
          {contactList.map((contact: IContact, index) => (
            <React.Fragment key={`${contact.name} ${index}`}>
              <ContactPeekCard contact={contact} />{" "}
            </React.Fragment>
          ))}
        </StyledTaskCard>
      </>
    </StyledContactList>
  );
};
