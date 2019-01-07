## Installing

Using npm:

```sh
npm i duke-convos-api
```

## Usage

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

## All available functions

- getDinners(successCallback, errorCallback)
- getDinner(dinnerId, successCallback, errorCallback)
- getProfessors(successCallback, errorCallback)
- getProfessor(professorId, successCallback, errorCallback)
- getStudents(successCallback, errorCallback)
- getStudent(netID, successCallback, errorCallback)
- getUsers(successCallback, errorCallback)
- getUser(id, successCallback, errorCallback)
