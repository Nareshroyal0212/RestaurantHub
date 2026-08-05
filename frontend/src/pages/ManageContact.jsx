import { useEffect, useState } from "react";
import {
    getMessages,
    deleteMessage
} from "../services/contactService";

import "../styles/manageContact.css";

function ManageContact() {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = async () => {

        try {

            const response = await getMessages();

            setMessages(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const removeMessage = async (id) => {

        if (window.confirm("Delete this message?")) {

            try {

                await deleteMessage(id);

                loadMessages();

            } catch (error) {

                console.log(error);

            }

        }

    };

    return (

        <div className="manage-contact">

            <h1>Contact Messages</h1>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>

                        <th>Email</th>

                        <th>Subject</th>

                        <th>Message</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {messages.map((message) => (

                        <tr key={message.id}>

                            <td>{message.fullName}</td>

                            <td>{message.email}</td>

                            <td>{message.subject}</td>

                            <td>{message.message}</td>

                            <td>

                                <button
                                    className="delete-btn"
                                    onClick={() => removeMessage(message.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default ManageContact;