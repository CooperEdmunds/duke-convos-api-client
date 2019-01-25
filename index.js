"use strict";

var axios = require("axios");
var Cookies = require("js-cookie");
var moment = require("moment");

// Instantiate an axios client
const api = axios.create({
  baseURL: `https://dukeconvo.herokuapp.com/`
});

api.interceptors.request.use(
  function(config) {
    const token = Cookies.get("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    console.log(config);
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

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
      errorCallback(error.response);
    });
};

exports.getActiveDinners = function(successCallback, errorCallback) {
  api
    .get("dinners")
    .then(response => {
      let dinners = response.data;
      let activeDinners = [];

      // not status 2
      // not more than 3 weeks in the future
      // not less than the thursday before the dinner

      for (let i = 0; i < dinners.length; i++) {
        let dinner = dinners[i];
        if (dinner.status === 2) continue;
        let dinnerDate = moment.unix(dinner.timeStamp);
        if (dinnerDate.endOf("week").fromNow() > 3) continue;
        let thursBeforeDinner = dinnerDate.isBefore(dinnerDate.day(4))
          ? dinnerDate.day(-4)
          : dinnerDate.day(4);
        if (thursBeforeDinner.isBefore(moment())) continue;
        activeDinners.push(dinner);
      }
      successCallback(activeDinners);
    })
    .catch(error => {
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
    });
};

exports.deleteDinner = function(id, successCallback, errorCallback) {
  api
    .delete("dinner/" + id)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
    });
};

exports.deleteProfessor = function(uniqueID, successCallback, errorCallback) {
  api
    .delete("professor/" + uniqueID)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
    });
};

exports.deleteStudent = function(netID, successCallback, errorCallback) {
  api
    .delete("student/" + netID)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
    });
};

// Create a new user
exports.createUser = function(userObj, successCallback, errorCallback) {
  let clonedUser = JSON.parse(JSON.stringify(userObj));

  api
    .post("/user/register", clonedUser)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error.response);
    });
};

// Update a new user
exports.updateUser = function(userID, userObj, successCallback, errorCallback) {
  let clonedUser = JSON.parse(JSON.stringify(userObj));

  api
    .put("user/" + userID, clonedUser)
    .then(response => {
      successCallback(response.data);
    })
    .catch(error => {
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
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
      errorCallback(error.response);
    });
};
