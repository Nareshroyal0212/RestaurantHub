import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import {
    getStaff,
    addStaff,
    updateStaff,
    deleteStaff
} from "../services/staffService";

import "../styles/staff.css";

function Staff() {

    const emptyStaff = {

        fullName: "",
        email: "",
        phone: "",
        designation: "",
        salary: "",
        shift: ""

    };

    const [staffList, setStaffList] = useState([]);
    const [staff, setStaff] = useState(emptyStaff);
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {

        loadStaff();

    }, []);

    const loadStaff = async () => {

        try {

            const response = await getStaff();

            setStaffList(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setStaff({

            ...staff,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (editingId) {

                await updateStaff(editingId, staff);

            } else {

                await addStaff(staff);

            }

            setStaff(emptyStaff);

            setEditingId(null);

            loadStaff();

        } catch (error) {

            console.log(error);

        }

    };

    const editStaff = (item) => {

        setStaff(item);

        setEditingId(item.id);

    };

    const removeStaff = async (id) => {

        if (window.confirm("Delete this staff member?")) {

            try {

                await deleteStaff(id);

                loadStaff();

            } catch (error) {

                console.log(error);

            }

        }

    };

    return (

        <AdminLayout>

            <div className="staff-page">

                <h1>Restaurant Staff</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={staff.fullName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={staff.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        value={staff.phone}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="designation"
                        placeholder="Designation"
                        value={staff.designation}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="salary"
                        placeholder="Salary"
                        value={staff.salary}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="shift"
                        placeholder="Shift"
                        value={staff.shift}
                        onChange={handleChange}
                        required
                    />

                    <button>

                        {editingId ? "Update Staff" : "Add Staff"}

                    </button>

                </form>

                <table>

                    <thead>

                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Shift</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            staffList.length > 0 ? (

                                staffList.map((item) => (

                                    <tr key={item.id}>

                                        <td>{item.fullName}</td>

                                        <td>{item.email}</td>

                                        <td>{item.phone}</td>

                                        <td>{item.designation}</td>

                                        <td>₹ {item.salary}</td>

                                        <td>{item.shift}</td>

                                        <td>

                                            <button
                                                onClick={() => editStaff(item)}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="delete-btn"
                                                onClick={() => removeStaff(item.id)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td colSpan="7">

                                        No Staff Found

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

export default Staff;