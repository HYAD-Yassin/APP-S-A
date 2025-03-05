# 🏦 Spring Boot + Angular 19 Banking App

## 📽️ Introduction
![Spring Boot + Angular 19 APP](Spring%20Boot%20+%20Angular%2019%20APP.mp4)

This is a **full-stack banking application** built using **Spring Boot (backend)** and **Angular 19 (frontend)** with PostgreSQL as the database.  
It features **authentication, account management, transaction tracking, and a dynamic UI with dark/light mode**.

---

## 🚀 Features

### 🌙🌞 Dark/Light Mode Toggle  
- Users can **switch between dark and light mode** dynamically.
- Mode preference is stored, ensuring persistence across sessions.
- Implemented using Angular's built-in **theme switching** logic.

### 💳 Animated Banking Card with Customization  
- **Realistic 3D animations** for bank cards.
- Cards **switch dynamically** between **Mastercard and Visa** depending on the selected card.
- Users can **customize card designs**.

### 🔐 Authentication & User Management  
- **Sign-in page** for user authentication.
- Uses **Spring Security** with JWT for secure authentication.
- User session is maintained across page reloads.

### 📊 Transaction Tracking  
- Users can **view their card transactions**.
- Transactions are **sorted correctly by date**.
- Balances update dynamically as transactions are fetched.

### 🛠️ Tech Stack  
- **Backend:** Spring Boot, PostgreSQL, Spring Security  
- **Frontend:** Angular 19, TypeScript, SCSS  
- **Database:** PostgreSQL  
- **APIs:** RESTful API with JWT Authentication  
- **Tools:** Maven, Postman 

---

## 📂 Project Structure

```bash
spring-boot-angular-banking-app/
│── backend/                # Spring Boot Backend
│   ├── src/main/java/...   # Java source code
│   ├── src/main/resources/ # Configuration files (application.yml)
│   ├── pom.xml             # Maven dependencies
│
│── frontend/               # Angular 19 Frontend
│   ├── src/app/            # Angular source code
│   ├── src/assets/         # Static assets (icons, images)
│   ├── src/environments/   # Environment configurations
│   ├── angular.json        # Angular project config
│
│── README.md               # Project documentation
│── package.json            # Frontend dependencies
│── pom.xml                 # Backend dependencies
│── database.sql            # PostgreSQL database schema
```


## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- Java 17+
- PostgreSQL 15+
- Maven 3.9+

### Installation
```bash
# Frontend setup
cd frontend && npm install

# Backend setup
cd ../backend && mvn clean install
```


## 📜 License  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Developed with ❤️ by Yassin**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-%230A66C2)](https://www.linkedin.com/in/yassin-hyad/)
[![GitHub](https://img.shields.io/badge/GitHub-Profile-181717)](https://github.com/HYAD-Yassin)