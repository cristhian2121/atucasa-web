export const responseOk = (
  data,
  message = "Ok",
  status = 200,
  state = true
) => {
  return {
    message: message,
    data: data,
    state: state,
    status: status,
  };
};

export const responseError = (
  data,
  message = "fail",
  status = 500,
  state = false
) => {
  return {
    message: message,
    data: data,
    state: state,
    status: status,
  };
};
