const successResponse = function (res, msg) {
  const data = {
    status: 1,
    message: msg,
  };
  return res.status(200).json(data);
};

const successResponseWithData = function (res, msg, data) {
  const resData = {
    status: 1,
    message: msg,
    data,
  };
  return res.status(200).json(resData);
};

const ErrorResponse = function (res, msg) {
  if (msg.includes("E11000 duplicate key error")) {
    const data = {
      status: 0,
      message: "Expected unique value, got duplicate",
    };
    return res.status(409).json(data);
  }
  const data = {
    status: 0,
    message: msg,
  };
  return res.status(400).json(data);
};

const notFoundResponse = function (res, msg) {
  const data = {
    status: 0,
    message: msg,
  };
  return res.status(404).json(data);
};

const validationErrorWithData = function (res, msg, data) {
  const resData = {
    status: 0,
    message: msg,
    data,
  };
  return res.status(400).json(resData);
};

const unauthorizedResponse = function (res, msg) {
  const data = {
    status: 0,
    message: msg,
  };
  return res.status(401).json(data);
};

export const apiResponse = {
  successResponse,
  successResponseWithData,
  ErrorResponse,
  notFoundResponse,
  validationErrorWithData,
  unauthorizedResponse,
};