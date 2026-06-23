# Mini CRM Opportunity Tracker - Frontend

A modern React-based CRM application that allows authenticated users to manage opportunities in a shared sales pipeline.

## Live Application
https://mini-crm-frontend-azure.vercel.app

## GitHub Repository
https://github.com/Venukanna/mini-crm-frontend

---

## Features

### Authentication
- User Registration
- User Login
- JWT-based session management
- Protected Routes
- Automatic logout on invalid token

### Opportunity Management
- Create Opportunity
- Edit Opportunity
- Delete Opportunity
- Shared Opportunity Dashboard

### Dashboard Analytics
- Total Opportunities
- Total Employees
- My Opportunities
- Won Deals
- Opportunities grouped by employee

### Authorization UI
- All users can view opportunities.
- Edit and Delete buttons are visible only to the opportunity owner.

### User Experience
- Responsive Dashboard
- Reusable Components
- Clean UI Design
- Route Protection
- Persistent Login using Local Storage

---

## Tech Stack

- React
- Vite
- React Router DOM
- Axios
- CSS
- Vercel (Deployment)

---

## Project Structure

src/
├── assets/
├── components/
│ ├── Navbar.jsx
│ ├── OpportunityCard.jsx
│ └── ProtectedRoute.jsx
├── context/
│ └── AuthContext.jsx
├── pages/
│ ├── Dashboard.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ └── OpportunityForm.jsx
├── services/
│ ├── api.js
│ ├── authService.js
│ └── opportunityService.js
├── App.jsx
├── App.css
├── styles.css
└── main.jsx

---

## Environment Variables

Create a `.env` file:

```env
VITE_API_BASE_URL=https://mini-crm-backend-is3s.onrender.com/api
```
