import Contact from "../Contact";
import PropTypes from 'prop-types';
import styles from "./ContactList.module.css"

export default function ContactList({ children, contacts, deleteContact }) {
        return (
            <div className={styles["contact-wrapper"]}>
                {children}
                {contacts.length ?
                    (<ul className={styles["contact-list"]}>
                        {contacts.map(contact => (
                            <Contact
                                key = {contact.id}
                                id={contact.id}
                                name={contact.name}
                                number={contact.number}
                                deleteContact={deleteContact}
                            />
                        ))}
                    </ul>) :
                    (<p className={styles["absent-contact"]}>Such contact is absent</p>)
                }
            </div>
        )
    }

ContactList.propTypes = {
    contacts: PropTypes.array,
    deleteContact: PropTypes.func,
}

