# Installing

Using npm:

```sh
npm i duke-convos-api
```

# Usage

```javascript
var api = require("duke-convos-api");

api.getStudents(
  // the data is returned as students
  students => {
    console.log(students);
  },
  // an error is returned
  error => {
    console.error(error);
  }
);
```

Note: As you can see, the parameters are two callback functions. Some functions take more parameters (such as the id of the sought-after object) but the last two parameters are always a success callback and an error callback, respectively.

For example, here is a call to get a dinner object for id 2:

```javascript
var api = require("duke-convos-api");

api.getDinner(
  2,
  // the data is returned as dinner
  dinner => {
    console.log(dinner);
  },
  // an error is returned
  error => {
    console.error(error);
  }
);
```

# All available functions

### Dinners

- getDinners(successCallback, errorCallback)
- getDinner(dinnerId, successCallback, errorCallback)
- createDinner(dinnerObj, successCallback, errorCallback)
- updateDinner(id, dinnerObj, successCallback, errorCallback)
- deleteDinner(id, successCallback, errorCallback)

### Professors

- getProfessors(successCallback, errorCallback)
- getProfessor(professorId, successCallback, errorCallback)
- createProfessor(professorObj, successCallback, errorCallback)
- updateProfessor(uniqueID, professorObj, successCallback, errorCallback)
- deleteProfessor(uniqueID, successCallback, errorCallback)

### Students

- getStudents(successCallback, errorCallback)
- getStudent(netID, successCallback, errorCallback)
- createStudent(studentObj, successCallback, errorCallback)
- updateStudent(netID, studentObj, successCallback, errorCallback)
- deleteStudent(netID, successCallback, errorCallback)

### Users

- getUsers(successCallback, errorCallback)
- getUser(id, successCallback, errorCallback)

### Check in

- updateApplicationAttendance(attendanceDict, successCallback, errorCallback)
  - statusDict: maps application id to "present" boolean

### Selection

- updateApplicationStatuses(statusDict, successCallback, errorCallback)
  - statusDict: maps application id to new status int
- confirmDinnerSelection(dinnerID, successCallback, errorCallback)
