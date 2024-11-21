
SET FOREIGN_KEY_CHECKS=0;
SET AUTOCOMMIT = 0;

--------------------------------------------------------
-- Create Table
--------------------------------------------------------

CREATE OR REPLACE TABLE Physicians (
    physicianID INT AUTO_INCREMENT PRIMARY KEY,
    physician_name VARCHAR(50) NOT NULL,
    specialty VARCHAR(50) NOT NULL
);

CREATE OR REPLACE TABLE Patients (
    patientID INT AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(50) NOT NULL,
    admitted_date DATE NOT NULL,
    discharged_date DATE NOT NULL
);

CREATE OR REPLACE TABLE MedChart (
    medchartDetailsID INT AUTO_INCREMENT PRIMARY KEY,
    physicianID INT NOT NULL,
    patientID INT NOT NULL,
    FOREIGN KEY (physicianID) REFERENCES Physicians(physicianID) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (patientID) REFERENCES Patients(patientID) 
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE OR REPLACE TABLE Diagnoses (
    diagnosisID INT AUTO_INCREMENT PRIMARY KEY,
    diagnosis_name VARCHAR(50) NOT NULL,
    description VARCHAR(50) NOT NULL,
    patientID INT NOT NULL,
    FOREIGN KEY (patientID) REFERENCES Patients(patientID) 
        ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE OR REPLACE TABLE Tests (
    testID INT AUTO_INCREMENT PRIMARY KEY,
    test_name VARCHAR(50) NOT NULL,
    test_date DATE NOT NULL,
    test_time TIME NOT NULL,
    physicianID INT NULL, 
    patientID INT NOT NULL,
    result VARCHAR(50) NOT NULL,
    FOREIGN KEY (patientID) REFERENCES Patients(patientID) 
        ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (physicianID) REFERENCES Physicians(physicianID) 
        ON DELETE SET NULL ON UPDATE CASCADE
);

--------------------------------------------------------
-- Insert Data
--------------------------------------------------------

INSERT INTO Physicians (physician_name, specialty) VALUES
    ('Dr. Sarah Lee', 'Cardiology'),
    ('Dr. Michael Patel', 'Dermatology'),
    ('Dr. Emily Nguyen', 'Pediatrics');

INSERT INTO Patients (patientID, patient_name, date_of_birth, gender, admitted_date, discharged_date) VALUES
(101, 'John Smith', '1988-03-12', 'M', '2024-01-10', '2024-01-20'),
(102, 'Emily Lai', '2018-11-11', 'F', '2024-02-14', '2024-02-20'),
(103, 'Zack Johnson', '2000-06-06', 'M', '2024-03-08', '2024-03-22'),
(104, 'Ed Martinez', '2020-05-26', 'M', '2024-01-07', '2024-01-20'),
(105, 'Sarah Wilson', '1971-12-21', 'F', '2024-04-10', '2024-04-25'),
(106, 'Kim Nguyen', '1998-02-27', 'F', '2024-03-15', '2024-04-10'),
(107, 'Kevin Lam', '2000-10-12', 'M', '2024-01-05', '2024-01-25'),
(108, 'Jason Gonzales', '2016-07-21', 'M', '2024-08-14', '2024-09-02');

INSERT INTO MedChart (medchartDetailsID, physicianID, patientID) VALUES
(601, 1, 101),
(602, 3, 102),
(603, 2, 103),
(604, 3, 104),
(605, 1, 105),
(606, 2, 106),
(607, 1, 107),
(608, 3, 108);

INSERT INTO Diagnoses (diagnosisID, diagnosis_name, description, patientID) VALUES
(201, 'Pericarditis', 'Inflammation of the pericardium', 101),
(202, 'Bronchitis', 'Inflammation of the lungs', 102),
(203, 'Acne', 'Papules on left cheek', 103),
(204, 'Conjunctivitis', 'Redness in left eye', 104),
(205, 'Coronary Artery Disease', 'Reduction of blood flow to cardiac muscle', 105),
(206, 'Eczema', 'Inflammation of the skin', 106),
(207, 'Atrial Fibrillation', 'Abnormal heart rhythm', 107),
(208, 'Chickenpox', 'Red, itchy spots on skin', 108);

INSERT INTO Tests (testID, test_name, test_date, test_time, physicianID, patientID, result) VALUES
(501, 'Immunoglobulin E', '2024-01-05', '05:25', 2, 101, 'High'),
(502, 'Troponin', '2024-03-12', '10:15', 1, 102, 'Normal'),
(503, 'Cholesterol', '2024-04-01', '08:16', 1, 103, 'Normal'),
(504, 'Glucose', '2024-08-20', '12:30', 3, 104, 'Low'),
(505, 'C-Reactive Protein', '2024-06-30', '20:51', 1, 105, 'Critically High'),
(506, 'Skin Culture', '2024-02-15', '02:27', 2, 106, 'Negative'),
(507, 'Sodium', '2024-05-29', '09:10', 3, 107, 'High'),
(508, 'Bilirubin', '2024-07-05', '22:21', 3, 108, 'Critically Low');

SET FOREIGN_KEY_CHECKS=1;
COMMIT;
