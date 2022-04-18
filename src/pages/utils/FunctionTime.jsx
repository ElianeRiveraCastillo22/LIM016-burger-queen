
export const FunctionTime = (timestamp) => {

  const date = new Date(timestamp);
  const dateOrder =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  return dateOrder;
}
