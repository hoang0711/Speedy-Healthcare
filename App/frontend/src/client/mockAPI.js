import axios from "axios";

export const getPatients = async () => {
    const response = await axios.get("http://classwork.engr.oregonstate.edu:51551/patients");
    return response.json()
}

export const getPatientsOld = async () => new Promise((resolve, reject) => {

    resolve([{
        id: 101,
        name: "John Doe",
        dateBirth: "1990-01-01",
        gender: "male",
        admittedDate: "2024-01-01",
        dischargedDate: "2024-01-05"
    },
    {
        id: 102,
        name: "Jo Doe",
        dateBirth: "1990-01-01",
        gender: "male",
        admittedDate: "2024-01-01",
        dischargedDate: "2024-01-05"
    }]);
})

export const createPatient = async (patient) => new Promise((resolve, reject) => {
    alert(JSON.stringify(patient));
    resolve(103);
});

export const editPatient = async (patient) => new Promise((resolve, reject) => {
    alert(JSON.stringify(patient));
    resolve(103);
})