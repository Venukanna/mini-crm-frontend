import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getOpportunities,
    deleteOpportunity,
} from "../services/opportunityService";

import Navbar from "../components/Navbar";
import OpportunityCard from "../components/OpportunityCard";

import "../App.css";

function Dashboard() {
    const navigate = useNavigate();

    const [opportunities,
        setOpportunities] =
        useState([]);

    const loggedInUser =
        JSON.parse(
            localStorage.getItem(
                "user"
            )
        );

    useEffect(() => {
        fetchOpportunities();
    }, []);

    const fetchOpportunities =
        async () => {
            try {
                const response =
                    await getOpportunities();

                setOpportunities(
                    response.data
                );
            } catch (error) {
                console.log(error);

                alert(
                    "Failed to fetch opportunities"
                );
            }
        };

    const handleLogout =
        () => {
            localStorage.removeItem(
                "token"
            );

            localStorage.removeItem(
                "user"
            );

            navigate("/login");
        };

    const handleDelete =
        async (id) => {
            const confirmDelete =
                window.confirm(
                    "Are you sure you want to delete this opportunity?"
                );

            if (!confirmDelete)
                return;

            try {
                await deleteOpportunity(
                    id
                );

                alert(
                    "Opportunity Deleted Successfully"
                );

                fetchOpportunities();
            } catch (error) {
                alert(
                    error.response?.data
                        ?.message ||
                    "Delete Failed"
                );
            }
        };

    // Dashboard Analytics
    const totalOpportunities =
        opportunities.length;

    const totalEmployees =
        new Set(
            opportunities.map(
                (item) =>
                    item.owner?._id
            )
        ).size;

    const myOpportunities =
        opportunities.filter(
            (item) =>
                item.owner?._id ===
                (loggedInUser?.id ||
                    loggedInUser?._id)
        ).length;

    const wonDeals =
        opportunities.filter(
            (item) =>
                item.stage === "Won"
        ).length;

    const employeeStats =
        opportunities.reduce(
            (acc, item) => {
                const name =
                    item.owner?.name ||
                    "Unknown";

                acc[name] =
                    (acc[name] || 0) +
                    1;

                return acc;
            },
            {}
        );

    return (
        <div className="container">
            <Navbar
                handleLogout={
                    handleLogout
                }
            />

            <div className="dashboard-actions">
                <button
                    className="primary-btn"
                    onClick={() =>
                        navigate(
                            "/opportunity/new"
                        )
                    }
                >
                    + Add Opportunity
                </button>
            </div>

            <div className="info-note">
                <strong>
                    Note:
                </strong>{" "}
                All users can view
                the shared
                opportunity
                pipeline. However,
                only the opportunity
                owner can edit or
                delete the
                opportunities they
                created.
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <h3>
                        Total
                        Opportunities
                    </h3>
                    <p>
                        {
                            totalOpportunities
                        }
                    </p>
                </div>

                <div className="stat-card">
                    <h3>
                        Total Employees
                    </h3>
                    <p>
                        {
                            totalEmployees
                        }
                    </p>
                </div>

                <div className="stat-card">
                    <h3>
                        My
                        Opportunities
                    </h3>
                    <p>
                        {
                            myOpportunities
                        }
                    </p>
                </div>

                <div className="stat-card">
                    <h3>
                        Won Deals
                    </h3>
                    <p>{wonDeals}</p>
                </div>
            </div>

            <div className="employee-summary">
                <h2>
                    Opportunities By
                    Employee
                </h2>

                {Object.entries(
                    employeeStats
                ).map(
                    ([
                        name,
                        count,
                    ]) => (
                        <p key={name}>
                            <strong>
                                {name}
                            </strong>{" "}
                            - {count}
                            {" "}
                            Opportunity
                            {count > 1
                                ? "ies"
                                : ""}
                        </p>
                    )
                )}
            </div>

            {opportunities.length ===
                0 ? (
                <h3 className="empty-state">
                    No Opportunities
                    Found
                </h3>
            ) : (
                opportunities.map(
                    (
                        opportunity
                    ) => (
                        <OpportunityCard
                            key={
                                opportunity._id
                            }
                            opportunity={
                                opportunity
                            }
                            loggedInUser={
                                loggedInUser
                            }
                            handleDelete={
                                handleDelete
                            }
                        />
                    )
                )
            )}
        </div>
    );
}

export default Dashboard;