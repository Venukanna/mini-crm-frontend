import { useNavigate } from "react-router-dom";

function OpportunityCard({
    opportunity,
    loggedInUser,
    handleDelete,
}) {
    const navigate = useNavigate();

    return (
        <div className="card">
            <h2>
                {opportunity.customerName}
            </h2>

            <p>
                <strong>
                    Requirement:
                </strong>{" "}
                {
                    opportunity.requirement
                }
            </p>

            <p>
                <strong>
                    Deal Value:
                </strong>{" "}
                ₹
                {opportunity.estimatedValue?.toLocaleString()}
            </p>

            <p>
                <strong>
                    Stage:
                </strong>{" "}
                {opportunity.stage}
            </p>

            <p>
                <strong>
                    Priority:
                </strong>{" "}
                {
                    opportunity.priority
                }
            </p>

            <p>
                <strong>
                    Created By:
                </strong>{" "}
                {
                    opportunity.owner
                        ?.name
                }
            </p>

            {opportunity.owner?._id ===
                (loggedInUser?.id ||
                    loggedInUser?._id) && (
                    <div className="actions">
                        <button
                            className="edit-btn"
                            onClick={() =>
                                navigate(
                                    `/opportunity/edit/${opportunity._id}`
                                )
                            }
                        >
                            Edit
                        </button>

                        <button
                            className="delete-btn"
                            onClick={() =>
                                handleDelete(
                                    opportunity._id
                                )
                            }
                        >
                            Delete
                        </button>
                    </div>
                )}
        </div>
    );
}

export default OpportunityCard;