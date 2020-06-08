import _ from "lodash";

export const isEmpty = data => {
  return _.isEmpty(data);
};

export const isObject = data => {
  return typeof data === "object";
};

export const isArray = data => {
  return Array.isArray(data);
};

export const isFunction = data => {
  return typeof data == "function";
};
