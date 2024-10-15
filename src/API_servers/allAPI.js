import serverUrl from "./serverUrl";
import commonAPI from "./commonAPI";

// Upload job details
export const uploadJobAPI = async (uploadJob) => {
    return await commonAPI("POST", `${serverUrl}/allJobs`, uploadJob);
};

// Get all job details
export const getJobs = async () => {
    return await commonAPI("GET", `${serverUrl}/allJobs`, "");
};

// Delete job by ID
export const deleteJobAPI = async (id) => {
    return await commonAPI("DELETE", `${serverUrl}/allJobs/${id}`, {});
};

// Edit job details by ID
export const editAPI = async (id, jobDetails) => {
    return await commonAPI("PUT", `${serverUrl}/allJobs/${id}`, jobDetails);  
};

// Get a single job by ID
export const getSingleJobAPI = async (id) => {
    return await commonAPI("GET", `${serverUrl}/allJobs/${id}`); 
};
