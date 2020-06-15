export const execute = (ref, data, extraParams, callback) => {
  data.forEach((item) => {
    const fnName = item.name;
    const value = item.params;

    this[fnName](ref, value, extraParams, callback);
  });
};

// const popupMessage = (ref, data) => {
//   console.log('popupMessage');
// };

// import _ from "lodash";

// import Commander from "../../facade/Commander";
// import CommandValidatorWorker from "./commandValidatorWorker";

// import Toast from "./worker/toast";
// import RedirectWorker from "./worker/redirect/RedirectWorker";

// const validate = (cls, actionList) => {
//   return new Promise(async (success, exception) => {
//     const validator = new CommandValidatorWorker();
//     const result = await validator.receive(cls, actionList);

//     if (result.success) {
//       success(actionList);
//     } else {
//       exception(result);
//     }
//   });
// };

// class UICommander extends Commander {
//   constructor(props) {
//     super(props);

//     this.redirectWorker = new RedirectWorker();
//   }

//   receive = async (ref, data, extraParams, callback) => {
//     const isValid = await validate(this, data);

//     if (isValid.success) {
//       this.execute(ref, data, extraParams, callback);
//     }

//     return isValid;
//   };

//   execute = (ref, data, extraParams, callback) => {
//     data.forEach((item) => {
//       const fnName = item.name;
//       const value = item.params;

//       this[fnName](ref, value, extraParams, callback);
//     });
//   };

//   popupMessage = (ref, data) => {
//     // แก้ ให้เรียก worker
//     const toast = new Toast();
//     if (data.message) {
//       const { type, message } = data;

//       switch (type) {
//         case "success":
//           toast.success(message);
//           break;

//         case "info":
//           toast.info(message);
//           break;

//         case "loading":
//           toast.loading(message);
//           break;

//         case "warn":
//           toast.warn(message);
//           break;

//         case "error":
//           toast.error(message);
//           break;

//         default:
//           toast.error(message);
//           break;
//       }
//     } else {
//       toast.error(data);
//     }
//   };

//   redirect = (refs, data) => {
//     this.redirectWorker.execute(refs, data);
//   };
// }

// export default UICommander;
