-- Team Members: Lujia He, Bang Hoang
-- Group 68
-- DML queries for Project Step 3 Draft

------------------------------------------------------------
-- CRUD functions for Physicians
------------------------------------------------------------

-- Retrieve all physician IDs and names
SELECT physicianID, physician_name FROM Physicians;

-- Retrieve a physician based on physicianID
SELECT physician_name, specialty
FROM Physicians
WHERE physicianID = :physicianIDInput;

-- Retrieve a physician based on a specific specialty
SELECT physicianID, physician_name
FROM Physicians
WHERE specialty = :specialtyInput;

-- Create a new physician in the database
INSERT INTO Physicians (physician_name, specialty)
VALUES (:physician_nameInput, :specialtyInput);

-- Update a physician's information
UPDATE Physicians
SET physician_name = :physician_nameInput, specialty = :specialtyInput
WHERE physicianID = :physicianIDInput;

-- Delete a physician from the database
DELETE FROM Physicians
WHERE physicianID = :physicianIDInput;


------------------------------------------------------------
-- CRUD functions for Patients
------------------------------------------------------------

-- Retrieve all patients from the database
SELECT patientID, patient_name, date_of_birth, gender, admitted_date, discharged_date 
FROM Patients;

-- Retrieve a specific patient based on patientID
SELECT patientID, patient_name, date_of_birth, gender, admitted_date, discharged_date 
FROM Patients
WHERE patientID = :patientIDInput;

-- Create a new patient in the database
INSERT INTO Patients (patient_name, date_of_birth, gender, admitted_date, discharged_date)
VALUES (:patient_nameInput, :date_of_birthInput, :genderInput, :admitted_dateInput, :discharged_dateInput);

-- Update a patient's information
UPDATE Patients
SET patient_name = :patient_nameInput, date_of_birth = :date_of_birthInput, gender = :genderInput
WHERE patientID = :patientIDInput;

-- Delete a patient from the database
DELETE FROM Patients
WHERE patientID = :patientIDInput;


------------------------------------------------------------
-- CRUD functions for MedChart
------------------------------------------------------------

-- Retrieve all MedChart records with patient and physician details
SELECT MedChart.medchartDetailsID, Patients.patient_name as patient, Physicians.physician_name as physician
FROM MedChart
INNER JOIN Patients ON MedChart.patientID = Patients.patientID
INNER JOIN Physicians ON MedChart.physicianID = Physicians.physicianID
ORDER BY MedChart.patientID;

-- Create a new MedChart record
INSERT INTO MedChart (physicianID, patientID)
VALUES (:physicianIDInput, :patientIDInput)

-- Update a MedChart record
UPDATE MedChart
SET patientID = :patientIDInput, physicianID = :physicianIDInput
WHERE medchartDetailsID = :medchartDetailsIDInput;

-- Delete a MedChart record
DELETE FROM MedChart
WHERE medchartDetailsID = :medchartDetailsIDInput;


------------------------------------------------------------
-- CRUD functions for Diagnoses
------------------------------------------------------------

-- Retrieve all diagnoses from the database
SELECT diagnosisID, diagnosis_name, description, patientID FROM Diagnoses;

-- Retrieve a diagnosis based on patientID
SELECT diagnosisID, diagnosis_name, description
FROM Diagnoses
WHERE patientID = :patientIDInput;

-- Add a new diagnosis to the database
INSERT INTO Diagnoses (diagnosis_name, description, patientID)
VALUES (:diagnosis_nameInput, :descriptionInput, :patientIDInput);

-- Update a diagnosis based on patientID
UPDATE Diagnoses
SET diagnosis_name = :diagnosis_nameInput, description = :descriptionInput
WHERE patientID = :patientIDInput;

-- Delete a diagnosis record from the database
DELETE FROM Diagnoses
WHERE diagnosisID = :diagnosisIDInput;


------------------------------------------------------------
-- CRUD functions for Tests
------------------------------------------------------------

-- Retrieve all tests from the database
SELECT testID, test_name, test_date, test_time, result FROM Tests;

-- Retrieve all tests for a specific patient
SELECT testID, test_name, test_date, test_time, physicianID, result
FROM Tests
WHERE patientID = :patientID;

-- Retrieve all tests ordered by a specific physician
SELECT testID, test_name, test_date, test_time, patientID, result
FROM Tests
WHERE physicianID = :physicianIDInput;

-- Add a new test in the database
INSERT INTO Tests (test_name, test_date, test_time, physicianID, patientID)
VALUES (:test_nameInput, :test_dateInput, :test_timeInput, :physicianIDInput, :patientIDInput);

-- Update a test's result for a specific patient
UPDATE Tests
SET result = :resultInput
WHERE patientID = :patientIDInput;

-- Update a test's date and time
UPDATE Tests
SET test_date = :test_dateInput, test_time = :test_timeInput
WHERE testID = :testIDInput;

-- Delete a test from the database
DELETE FROM Tests
WHERE testID = testIDInput;
