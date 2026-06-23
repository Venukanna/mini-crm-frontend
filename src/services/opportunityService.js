import api from "./api";

export const getOpportunities = () => {
    return api.get("/opportunities");
};

export const createOpportunity = (data) => {
    return api.post("/opportunities", data);
};

export const updateOpportunity = (id, data) => {
    return api.put(`/opportunities/${id}`, data);
};

export const deleteOpportunity = (id) => {
    return api.delete(`/opportunities/${id}`);
};
