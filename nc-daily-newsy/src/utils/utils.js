export const formatDate = date => {
  let formattedDateArr = [];
  let result = date.slice(0, 10);
  let formattedDate = result
    .split("-")
    .reverse()
    .join("/");
  let time = date.slice(11, 19);
  formattedDateArr.push(formattedDate, time);
  return formattedDateArr;
};
