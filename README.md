# 🍽️ RestaurantHub – Full Stack Restaurant Management System

RestaurantHub is a Full Stack Restaurant Management System developed to simplify restaurant operations and enhance the customer experience. The application enables customers to register, browse the menu, place food orders, reserve tables, and contact the restaurant through an intuitive web interface. It also provides an admin panel for managing menu items, customer orders, reservations, staff, and reports.

---

# 🚀 Features

## Customer Module

- User Registration & Login
- Browse Restaurant Menu
- Add Items to Cart
- Update Cart Quantity
- Place Orders
- View Order History
- Track Order Status
- Table Reservation
- Contact Restaurant
- Customer Dashboard

---

## Admin Module

- Admin Login
- Dashboard
- Menu Management
- Order Management
- Update Order Status
- Reservation Management
- Customer Management
- Staff Management
- Reports

---

# 🛠 Technologies Used

### Frontend
- React.js
- Vite
- HTML5
- CSS3
- JavaScript
- Axios

### Backend
- Java
- Spring Boot
- REST APIs
- Maven

### Database
- MySQL

---

# 🏗 System Architecture

```
                      RestaurantHub Architecture

                 +--------------------------------+
                 |        React.js Frontend       |
                 |  HTML5 • CSS3 • JavaScript     |
                 |             Vite              |
                 +---------------+----------------+
                                 |
                           Axios HTTP Requests
                                 |
                                 ▼
                 +--------------------------------+
                 |      Spring Boot REST APIs     |
                 +---------------+----------------+
                                 |
                         Business Logic Layer
                                 |
                                 ▼
                 +--------------------------------+
                 |        MySQL Database          |
                 +--------------------------------+
```

---

# 🔄 Application Workflow

```
Customer/Admin

        │

        ▼

React.js Frontend

        │

        ▼

Axios

        │

        ▼

Spring Boot REST APIs

        │

        ▼

Business Logic

        │

        ▼

MySQL Database

        │

        ▼

Response

        │

        ▼

Frontend UI
```

---

# 📂 Project Structure

```
RestaurantHub

│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── RestaurantHubBackend
│   ├── src
│   ├── pom.xml
│   └── application.properties
│
├── database
│   └── restauranthub.sql
│
├── demo
│   └── RestaurantHub-Demo.mp4
│
├── README.md
│
├── LICENSE
│
└── .gitignore
```

---

# 🗄 Database

**Database Name**

```
restauranthub
```

**Main Tables**

- users
- menu
- orders
- reservations
- contacts
- staff

---

# ⚙ Installation

## 1. Clone Repository

```bash
git clone https://github.com/Nareshroyal0212/RestaurantHub.git
```

---

## 2. Backend

```bash
cd RestaurantHubBackend
```

Run

```bash
mvn spring-boot:run
```

---

## 3. Frontend

```bash
cd frontend
```

Install Dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

---

## 4. Database

Create Database

```sql
CREATE DATABASE restauranthub;
```

Import

```
database/restauranthub.sql
```

---



# 🌟 Project Highlights

- Full Stack Web Application
- Secure User Authentication
- REST API Integration
- Responsive User Interface
- Admin Dashboard
- Customer Dashboard
- Cart Management
- Order Tracking
- Reservation System
- Contact Management
- MySQL Database Integration

---

# 🚀 Future Enhancements

- Online Payment Integration
- Email Notifications
- Customer Reviews & Ratings
- Food Delivery Tracking
- Cloud Deployment
- Mobile Application

---

# 👨‍💻 Author

**Pusa Naresh Kumar Reddy**

GitHub: https://github.com/Nareshroyal0212

---

# 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star on GitHub.
