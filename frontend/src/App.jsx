import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";

import AdminDashboard from "./pages/AdminDashboard";
import ManageMenu from "./pages/ManageMenu";
import ManageReservation from "./pages/ManageReservation";
import ManageMessages from "./pages/ManageMessages";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Staff from "./pages/Staff";
import Reports from "./pages/Reports";

import AdminRoute from "./components/AdminRoute";
import NotFound from "./pages/NotFound";

function App() {

    return (

        <Routes>

            {/* Public Routes */}

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Cart */}

            <Route
                path="/cart"
                element={<Cart />}
            />

            {/* Customer Dashboard */}

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />

            {/* My Orders */}

            <Route
                path="/my-orders"
                element={<MyOrders />}
            />

            {/* Admin Dashboard */}

            <Route
                path="/admin"
                element={
                    <AdminRoute>
                        <AdminDashboard />
                    </AdminRoute>
                }
            />

            {/* Manage Menu */}

            <Route
                path="/admin/menu"
                element={
                    <AdminRoute>
                        <ManageMenu />
                    </AdminRoute>
                }
            />

            {/* Manage Reservations */}

            <Route
                path="/admin/reservations"
                element={
                    <AdminRoute>
                        <ManageReservation />
                    </AdminRoute>
                }
            />

            {/* Manage Messages */}

            <Route
                path="/admin/messages"
                element={
                    <AdminRoute>
                        <ManageMessages />
                    </AdminRoute>
                }
            />

            {/* Orders */}

            <Route
                path="/admin/orders"
                element={
                    <AdminRoute>
                        <Orders />
                    </AdminRoute>
                }
            />

            {/* Customers */}

            <Route
                path="/admin/customers"
                element={
                    <AdminRoute>
                        <Customers />
                    </AdminRoute>
                }
            />

            {/* Staff */}

            <Route
                path="/admin/staff"
                element={
                    <AdminRoute>
                        <Staff />
                    </AdminRoute>
                }
            />

            {/* Reports */}

            <Route
                path="/admin/reports"
                element={
                    <AdminRoute>
                        <Reports />
                    </AdminRoute>
                }
            />

            {/* 404 */}

            <Route
                path="*"
                element={<NotFound />}
            />

        </Routes>

    );

}

export default App;