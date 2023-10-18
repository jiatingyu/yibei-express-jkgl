const response = ({ status, data, statusText }) => {
  if (status == 200) {
    return data;
  }
  return new Error(statusText);
};
export default response;
