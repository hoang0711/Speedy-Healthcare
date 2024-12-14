import axios from "axios";

const URL = "https://speedymd-backend-42c46ebfc66b.herokuapp.com/physicians"

// const formatDate = (dateTime) => (new Date(dateTime).toISOString().split('T')[0])

export const getPhysicians = async () => {
    const response = await axios.get(URL);
    const mappedData = response.data.map(physician => ({
        physicianID: physician.physicianID,
        ...physician
    }))
    return mappedData;
}

export const createPhysician = async (newPhysician) => {
    const response = await axios.post(URL, newPhysician);
};

export const editPhysician = async (physician) => {
    const response = await axios.put(URL + `/${physician.physicianID}`, physician);
};

export const deletePhysician = async (physicianID) => {
    const response = await axios.delete(URL + `/${physicianID}`);
};