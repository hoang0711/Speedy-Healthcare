import axios from "axios";

const URL = "https://speedy-healthcare-production.up.railway.app:40986/api/diagnoses"

// const formatDate = (dateTime) => (new Date(dateTime).toISOString().split('T')[0])

export const getDiagnoses = async () => {
    const response = await axios.get(URL);
    const mappedData = response.data.map(diagnosis => ({
        diagnosisID: diagnosis.diagnosisID,
        ...diagnosis
    }))
    return mappedData;
}

export const createDiagnosis = async (newDiagnosis) => {
    const response = await axios.post(URL, newDiagnosis);
};

export const editDiagnosis = async (diagnosis) => {
    const response = await axios.put(URL + `/${diagnosis.diagnosisID}`, diagnosis);
};

export const deleteDiagnosis = async (diagnosisID) => {
    const response = await axios.delete(URL + `/${diagnosisID}`);
};