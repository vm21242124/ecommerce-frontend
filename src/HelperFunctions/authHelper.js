import axios from "axios";

export const registerapi = ({ name, email, password }) => {
    let data
  axios
    .post("http://127.0.0.1:5000/api/user/register", { name, email, password })
    .then((res) => data=res.data)
    .catch((e) => console.log(e));
  return data;
};
export const loginapi = async ({ email, password }) => {
  const res = await axios.post("http://localhost:5000/api/user/login", {
    email,
    password,
  });
};
export const checkpass = (pass, cpass) => {
  return pass === cpass ? true : false;
};
