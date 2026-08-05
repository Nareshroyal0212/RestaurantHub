import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import {
    getMenu,
    addMenu,
    updateMenu,
    deleteMenu
} from "../services/menuService";
import { uploadMenuImage } from "../services/uploadService";
import "../styles/manageMenu.css";

function ManageMenu() {

    const emptyMenu = {
        foodName: "",
        category: "",
        price: "",
        description: "",
        imageUrl: "",
        available: true
    };

    const [menuItems, setMenuItems] = useState([]);
    const [menu, setMenu] = useState(emptyMenu);
    const [editingId, setEditingId] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        loadMenu();
    }, []);

    const loadMenu = async () => {

        try {

            const response = await getMenu();

            setMenuItems(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setMenu({

            ...menu,

            [name]: type === "checkbox" ? checked : value

        });

    };

    const handleImage = (e) => {

        setImage(e.target.files[0]);

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            let imageUrl = menu.imageUrl;

            if (image) {

                const upload = await uploadMenuImage(image);

                imageUrl = upload.data.imageUrl;

            }

            const payload = {

                ...menu,

                imageUrl

            };

            if (editingId) {

                await updateMenu(editingId, payload);

            } else {

                await addMenu(payload);

            }

            setMenu(emptyMenu);

            setEditingId(null);

            setImage(null);

            loadMenu();

        } catch (error) {

            console.log(error);

        }

    };

    const editMenu = (item) => {

        setMenu(item);

        setEditingId(item.id);

    };

    const removeMenu = async (id) => {

        if (window.confirm("Delete this menu item?")) {

            try {

                await deleteMenu(id);

                loadMenu();

            } catch (error) {

                console.log(error);

            }

        }

    };

    return (

        <AdminLayout>

            <div className="manage-menu">

                <h1>Manage Menu</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="foodName"
                        placeholder="Food Name"
                        value={menu.foodName}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={menu.category}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={menu.price}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        value={menu.description}
                        onChange={handleChange}
                    />

                    <input
                        type="file"
                        onChange={handleImage}
                    />

                    <label>

                        Available

                        <input
                            type="checkbox"
                            name="available"
                            checked={menu.available}
                            onChange={handleChange}
                        />

                    </label>

                    <button>

                        {editingId ? "Update Menu" : "Add Menu"}

                    </button>

                </form>

                <table>

                    <thead>

                        <tr>

                            <th>Image</th>
                            <th>Food</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {menuItems.map((item) => (

                            <tr key={item.id}>

                                <td>

                                    <img
                                        src={`http://localhost:9090${item.imageUrl}`}
                                        alt={item.foodName}
                                        width="80"
                                    />

                                </td>

                                <td>{item.foodName}</td>

                                <td>{item.category}</td>

                                <td>₹ {item.price}</td>

                                <td>

                                    {item.available ? "Available" : "Unavailable"}

                                </td>

                                <td>

                                    <button
                                        onClick={() => editMenu(item)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() => removeMenu(item.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </AdminLayout>

    );

}

export default ManageMenu;