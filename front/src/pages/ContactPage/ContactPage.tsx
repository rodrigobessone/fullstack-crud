import { useContext, useEffect, useState } from "react"
import { api } from "../../services/Api";
import { ContactContext } from "../../providers/UserContext/ContactContext.tsx/ContactContext";
import { UserContext } from "../../providers/UserContext/UserContext";
import { AddContactForm } from "../../components/ContactPage/TodoList/AddContactForm";


export const ContactPage = () => {
  const [loading, setLoading] = useState(false)
  const { setContactList } = useContext(ContactContext);
  const { setUser, globalLoading } = useContext(UserContext)
  const userJSON = localStorage.getItem("user");
  const token = localStorage.getItem("@TOKEN")
  const user = userJSON ? JSON.parse(userJSON) : null;


  useEffect(()=>{
    setUser(user)
  },[])

  useEffect(() => {

    const fetchContacts = async () => {

      try {
        setLoading(true);

        if(user) {
          const { data } = await api.get('/contact', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          setContactList(data); 
        }
      } catch (error) {
        console.log('Algo deu errado ao carregar o seu contato.');
      } finally {
        setLoading(false) 
      }
    };
  
    fetchContacts();
  }, [globalLoading]);

  return (
    <main>
      { user && (
        <AddContactForm/>
        )}
    </main>
  )
}

