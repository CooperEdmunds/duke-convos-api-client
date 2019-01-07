"use strict";

var axios = require("axios");

// Instantiate an axios client
const api = axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://dukeconvo.herokuapp.com/`
});

// *************************
//         Dinners
// *************************

// Get all dinners
exports.getDinners = function(successCallback, errorCallback) {
  api
    .get("dinners")
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};
// Get dinner with given id
exports.getDinner = function(id, successCallback, errorCallback) {
  api
    .get("/dinner/" + id)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

exports.createDinner = function(dinnerObj, successCallback, errorCallback) {
  let clonedDinner = JSON.parse(JSON.stringify(dinnerObj));

  clonedDinner.studentLimit = parseInt(clonedDinner.studentLimit);

  api
    .post("dinner/register", clonedDinner)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

exports.updateDinner = function(id, dinnerObj, successCallback, errorCallback) {
  let clonedDinner = JSON.parse(JSON.stringify(dinnerObj));

  clonedDinner.studentLimit = parseInt(clonedDinner.studentLimit);

  delete clonedDinner.applications;

  api
    .put("dinner/" + id, clonedDinner)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

exports.deleteDinner = function(id, successCallback, errorCallback) {
  api
    .delete("dinner/" + id)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};
// *************************
//         Professors
// *************************

// Get all professors
exports.getProfessors = function(successCallback, errorCallback) {
  api
    .get("professors")
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};
// Get professor with the given id
exports.getProfessor = function(id, successCallback, errorCallback) {
  api
    .get("/professor/" + id)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

exports.createProfessor = function(
  professorObj,
  successCallback,
  errorCallback
) {
  let clonedProfessor = JSON.parse(JSON.stringify(professorObj));

  clonedProfessor.department = parseInt(clonedProfessor.department);
  clonedProfessor.school = parseInt(clonedProfessor.school);
  clonedProfessor.genderPronouns = parseInt(clonedProfessor.genderPronouns);

  api
    .post("professor/register", clonedProfessor)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

exports.updateProfessor = function(
  uniqueID,
  professorObj,
  successCallback,
  errorCallback
) {
  let clonedProfessor = JSON.parse(JSON.stringify(professorObj));

  clonedProfessor.department = parseInt(clonedProfessor.department);
  clonedProfessor.school = parseInt(clonedProfessor.school);
  clonedProfessor.genderPronouns = parseInt(clonedProfessor.genderPronouns);

  delete clonedProfessor.uniqueID;

  api
    .put("professor/" + uniqueID, clonedProfessor)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

exports.deleteProfessor = function(uniqueID, successCallback, errorCallback) {
  api
    .delete("professor/" + uniqueID)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

// *************************
//         Students
// *************************

// Get all students
exports.getStudents = function(successCallback, errorCallback) {
  api
    .get("students")
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};
// Get student with the given netid
exports.getStudent = function(netID, successCallback, errorCallback) {
  api
    .get("student/" + netID)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

exports.createStudent = function(studentObj, successCallback, errorCallback) {
  let clonedStudent = JSON.parse(JSON.stringify(studentObj));

  clonedStudent.major = parseInt(clonedStudent.major);
  clonedStudent.graduationYear = parseInt(clonedStudent.graduationYear);
  clonedStudent.genderPronouns = parseInt(clonedStudent.genderPronouns);

  api
    .post("student/register", clonedStudent)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

exports.updateStudent = function(
  netID,
  studentObj,
  successCallback,
  errorCallback
) {
  let clonedStudent = JSON.parse(JSON.stringify(studentObj));

  clonedStudent.major = parseInt(clonedStudent.major);
  clonedStudent.graduationYear = parseInt(clonedStudent.graduationYear);
  clonedStudent.genderPronouns = parseInt(clonedStudent.genderPronouns);

  delete clonedStudent.netID;
  delete clonedStudent.numberApplications;
  delete clonedStudent.numberApplicationsSemester;
  delete clonedStudent.numberSelections;
  delete clonedStudent.numberSelectionsSemester;

  api
    .put("student/" + netID, clonedStudent)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

exports.deleteStudent = function(netID, successCallback, errorCallback) {
  api
    .delete("student/" + netID)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

// *************************
//         Users
// *************************

// Get all users
exports.getUsers = function(successCallback, errorCallback) {
  api
    .get("users")
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

// Get user with the given id
exports.getUser = function(id, successCallback, errorCallback) {
  api
    .get("/user/" + id)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

// *************************
//         Checkin
// *************************

exports.updateApplicationAttendance = function(
  statusDict,
  successCallback,
  errorCallback
) {
  api
    .post("application/checkin", statusDict)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

// *************************
//         Selection
// *************************

exports.updateApplicationStatuses = function(
  statusDict,
  successCallback,
  errorCallback
) {
  api
    .post("application/update", statusDict)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};

exports.confirmDinnerSelection = function(
  dinnerID,
  successCallback,
  errorCallback
) {
  api
    .get("dinner/confirm/" + dinnerID)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error);
    });
};
