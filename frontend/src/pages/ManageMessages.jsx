import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import {
    getMessages,
    deleteMessage
} from "../services/contactService";
import "../styles/manageMessages.css";

function ManageMessages() {

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

        <AdminLayout>

            <div className="manage-messages">

                <h1>Manage Contact Messages</h1>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            messages.length > 0 ? (

                                messages.map((message) => (

                                    <tr key={message.id}>

                                        <td>{message.id}</td>

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

                                ))

                            ) : (

                                <tr>

                                    <td colSpan="6">

                                        No Messages Found

                                    </td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

        </AdminLayout>

    );

}

export default ManageMessages;