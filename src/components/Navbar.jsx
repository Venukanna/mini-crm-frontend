function Navbar({ handleLogout }) {
    return (
        <div className="header">
            <h1 className="dashboard-title">
                Mini CRM Dashboard
            </h1>

            <button
                className="logout-btn"
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default Navbar;