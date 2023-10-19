const response = ({ status, data, statusText }): any => {
  if (status === 200) {
    return data
  }
  return statusText
}
export default response
