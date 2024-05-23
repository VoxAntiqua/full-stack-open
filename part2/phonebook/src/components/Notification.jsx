const notificationStyle = {
  background: "lightgrey",
  fontSize: 20,
  borderStyle: "solid",
  borderRadius: 5,
  padding: 10,
  marginBottom: 10,
};

const Notification = ({ message, isError }) => {
  if (message === null) {
    return null;
  }
  if (isError) {
    return <div style={{ ...notificationStyle, color: "red" }}>{message}</div>;
  }
  return <div style={{ ...notificationStyle, color: "green" }}>{message}</div>;
};

export default Notification;
