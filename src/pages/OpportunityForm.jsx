import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    createOpportunity,
    updateOpportunity,
    getOpportunities,
} from "../services/opportunityService";

function OpportunityForm() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formData, setFormData] = useState({
        customerName: "",
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        requirement: "",
        estimatedValue: "",
        stage: "New",
        priority: "Medium",
        nextFollowUpDate: "",
        notes: "",
    });

    useEffect(() => {
        if (id) {
            fetchOpportunity();
        }
    }, [id]);

    const fetchOpportunity = async () => {
        try {
            const response = await getOpportunities();

            const opportunity = response.data.find(
                (item) => item._id === id
            );

            if (!opportunity) {
                alert("Opportunity not found");
                navigate("/dashboard");
                return;
            }

            setFormData({
                customerName:
                    opportunity.customerName || "",
                contactName:
                    opportunity.contactName || "",
                contactEmail:
                    opportunity.contactEmail || "",
                contactPhone:
                    opportunity.contactPhone || "",
                requirement:
                    opportunity.requirement || "",
                estimatedValue:
                    opportunity.estimatedValue || "",
                stage:
                    opportunity.stage || "New",
                priority:
                    opportunity.priority || "Medium",
                nextFollowUpDate:
                    opportunity.nextFollowUpDate
                        ? opportunity.nextFollowUpDate.split(
                            "T"
                        )[0]
                        : "",
                notes:
                    opportunity.notes || "",
            });
        } catch (error) {
            console.log(error);
            alert(
                "Failed to load opportunity"
            );
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:
                e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (id) {
                await updateOpportunity(
                    id,
                    formData
                );

                alert(
                    "Opportunity Updated Successfully"
                );
            } else {
                await createOpportunity(
                    formData
                );

                alert(
                    "Opportunity Created Successfully"
                );
            }

            navigate("/dashboard");
        } catch (error) {
            alert(
                error.response?.data
                    ?.message ||
                "Operation Failed"
            );
        }
    };

    return (
        <div
            style={{
                padding: "20px",
                maxWidth: "600px",
                margin: "0 auto",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                }}
            >
                {id
                    ? "Edit Opportunity"
                    : "Create Opportunity"}
            </h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="customerName"
                    placeholder="Customer Name"
                    value={
                        formData.customerName
                    }
                    onChange={handleChange}
                    required
                />

                <br />
                <br />

                <input
                    type="text"
                    name="contactName"
                    placeholder="Contact Name"
                    value={
                        formData.contactName
                    }
                    onChange={handleChange}
                />

                <br />
                <br />

                <input
                    type="email"
                    name="contactEmail"
                    placeholder="Contact Email"
                    value={
                        formData.contactEmail
                    }
                    onChange={handleChange}
                />

                <br />
                <br />

                <input
                    type="text"
                    name="contactPhone"
                    placeholder="Contact Phone"
                    value={
                        formData.contactPhone
                    }
                    onChange={handleChange}
                />

                <br />
                <br />

                <textarea
                    name="requirement"
                    placeholder="Requirement"
                    value={
                        formData.requirement
                    }
                    onChange={handleChange}
                    required
                />

                <br />
                <br />

                <input
                    type="number"
                    name="estimatedValue"
                    placeholder="Estimated Value"
                    value={
                        formData.estimatedValue
                    }
                    onChange={handleChange}
                />

                <br />
                <br />

                <select
                    name="stage"
                    value={
                        formData.stage
                    }
                    onChange={handleChange}
                >
                    <option value="New">
                        New
                    </option>
                    <option value="Contacted">
                        Contacted
                    </option>
                    <option value="Qualified">
                        Qualified
                    </option>
                    <option value="Proposal Sent">
                        Proposal Sent
                    </option>
                    <option value="Won">
                        Won
                    </option>
                    <option value="Lost">
                        Lost
                    </option>
                </select>

                <br />
                <br />

                <select
                    name="priority"
                    value={
                        formData.priority
                    }
                    onChange={handleChange}
                >
                    <option value="Low">
                        Low
                    </option>
                    <option value="Medium">
                        Medium
                    </option>
                    <option value="High">
                        High
                    </option>
                </select>

                <br />
                <br />

                <input
                    type="date"
                    name="nextFollowUpDate"
                    value={
                        formData.nextFollowUpDate
                    }
                    onChange={handleChange}
                />

                <br />
                <br />

                <textarea
                    name="notes"
                    placeholder="Notes"
                    value={
                        formData.notes
                    }
                    onChange={handleChange}
                />

                <br />
                <br />

                <button
                    className="primary-btn"
                    type="submit"
                >
                    {id
                        ? "Update Opportunity"
                        : "Create Opportunity"}
                </button>
            </form>
        </div>
    );
}

export default OpportunityForm;