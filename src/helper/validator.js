const validEmailRegex = RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
// const validPasswordRegex = RegExp(
//   /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/
// );

const lowerCaseRegex = RegExp(/[a-z]/);
const upperCaseRegex = RegExp(/[A-Z]/);
const specialCharsRegex = RegExp(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/);
const numericRegex = RegExp(/[0-9]/);
const nameRegex = RegExp(/^[a-zA-Z ]{2,30}$\b/);

function empty_custom(val) {
  if (val === undefined || val === null || val === "") return false;
  return true;
}

const validation = ({ value, rules, message }) => {
  return new Promise((resolve, reject) => {
    if (rules !== null) {
      rules = rules.split(",");
      message = message !== null ? message.split(",") : [""];
      let match = "";
      let arr = [];

      let i = 0;
      let error = "";

      rules.forEach((element) => {
        //for confirm pass
        arr = element.split("|");
        element = arr[0];
        match = arr[1];
        // confirm pass end

        let msg;

        switch (element) {
          //   FOR REQUIRED ELEMENT
          case "required":
            if (value.length < 1 || value.length < 0) {
              msg = empty_custom(message[i])
                ? message[i]
                : "This field is required";
              error = error.concat(msg + ", ");
            }
            break;
          // FOR EMAIL
          case "isEmail":
            if (!validEmailRegex.test(value)) {
              msg = empty_custom(message[i])
                ? message[i]
                : "Enter a valid email address";
              error = error.concat(msg + ", ");
            }
            break;

          // FOR NAME
          case "isName":
            if (!nameRegex.test(value)) {
              msg = empty_custom(message[i])
                ? message[i]
                : "Enter a valid name";
              error = error.concat(msg + ", ");
            }
            break;
          // FOR PASSWORD
          case "password":
            if (!lowerCaseRegex.test(value)) {
              msg = empty_custom(message[i])
                ? message[i]
                : "atlist 1 lower case";
              error = error.concat(msg + ", ");
            }
            if (!upperCaseRegex.test(value)) {
              msg = empty_custom(message[i])
                ? message[i]
                : "atlist 1 upper case";
              error = error.concat(msg + ", ");
            }
            if (!specialCharsRegex.test(value)) {
              msg = empty_custom(message[i])
                ? message[i]
                : "atlist 1 special character";
              error = error.concat(msg + ", ");
            }
            if (!numericRegex.test(value)) {
              msg = empty_custom(message[i])
                ? message[i]
                : "atlist 1 numeric character";
              error = error.concat(msg + ", ");
            }
            if (value.length < 6) {
              msg = empty_custom(message[i]) ? message[i] : "length minimum 6";
              error = error.concat(msg + ", ");
            }
            break;
          // FOR CONFIRM PASSWORD
          case "cpassword":
            if (value !== match) {
              msg = empty_custom(message[i])
                ? message[i]
                : "Confirm Password should be same as password";
              error = error.concat(msg + ", ");
            }

            break;
        }
        i++;
      });
      if (error === "") {
        resolve("");
      } else {
        let msgARR = error.split(",");
        resolve(msgARR[0]);
      }
    } else {
      resolve("");
    }
  });
};

export default validation;
