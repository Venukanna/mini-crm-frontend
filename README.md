# Mini CRM Opportunity Tracker - Frontend

## Project Overview

A React-based CRM application that enables authenticated users to manage a shared sales opportunity pipeline through a clean and responsive user interface.

## Live Application

https://mini-crm-frontend-azure.vercel.app

## GitHub Repository

https://github.com/Venukanna/mini-crm-frontend

---

## Tech Stack

* React
* Vite
* React Router DOM
* Axios
* Context API
* CSS
* Vercel

---

## Features

* User Registration
* User Login
* JWT-based Authentication
* Protected Routes
* Persistent Login using localStorage
* Shared Opportunity Dashboard
* Create, Edit and Delete Opportunities
* Dashboard Analytics
* Responsive User Interface

---

## Dashboard Analytics

* Total Opportunities
* Total Employees
* My Opportunities
* Won Deals
* Opportunities grouped by employee

---

## Authorization Rules

* All authenticated users can view opportunities.
* Edit and Delete buttons are visible only for opportunities owned by the logged-in user.
* Backend still enforces authorization even if frontend buttons are manipulated.

---

## Project Structure

/frontend
├── src
│   ├── assets
│   ├── components
│   ├── context
│   ├── pages
│   ├── services
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── .env.example

---

## Environment Variables

Create a .env file:

VITE_API_BASE_URL=https://mini-crm-backend-is3s.onrender.com/api

---

## Frontend Setup

git clone https://github.com/Venukanna/mini-crm-frontend.git
cd mini-crm-frontend
npm install
npm run dev

---

## Available Routes

/register
/login
/dashboard
/opportunity/new
/opportunity/edit/:id

---

## API Integration

POST /api/auth/register
POST /api/auth/login
GET /api/auth/me

GET /api/opportunities
GET /api/opportunities/:id
POST /api/opportunities
PUT /api/opportunities/:id
DELETE /api/opportunities/:id

---

## Deployment

Frontend: Vercel

Live Application:
https://mini-crm-frontend-azure.vercel.app

---

## Additional Enhancements Implemented

* Dashboard summary cards
* Opportunities grouped by employee
* Owner-based UI controls
* Responsive styling
* Reusable components
* Protected routing

---

## Known Limitations / Future Improvements

* Search and filtering
* Pagination
* Sorting by stage and priority
* Mobile UI enhancements
* Kanban-style opportunity board

---

## Author

Venu Kanna
