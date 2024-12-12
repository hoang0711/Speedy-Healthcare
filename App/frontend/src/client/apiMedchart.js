import axios from "axios";

const URL = "https://speedy-healthcare-production.up.railway.app:3306/api/medcharts"

// const formatDate = (dateTime) => (new Date(dateTime).toISOString().split('T')[0])

export const getMedcharts = async () => {
    const response = await axios.get(URL);
    const mappedData = response.data.map(medchart => ({
        medchartDetailsID: medchart.medchartDetailsID,
        ...medchart
    }))
    return mappedData;
}

export const createMedchart = async (newMedchart) => {
    const response = await axios.post(URL, newMedchart);
};

export const editMedchart = async (medchart) => {
    const response = await axios.put(URL + `/${medchart.medchartDetailsID}`, medchart);
};

export const deleteMedchart = async (medchartDetailsID) => {
    const response = await axios.delete(URL + `/${medchartDetailsID}`);
};