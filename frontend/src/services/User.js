import axios from "axios";
import { url } from "./Config";

// CRUD basico asumiendo conexion

const addUser = async (usuario) => {
  const res = await axios.post(url + "/user", usuario);
  console.log(res);
  return res.data;
};

const getUser = async (id) => {
  //http://localhost:8080/user/id 
  const res = await axios.get(url + "/user/" + id);
  console.log(res);
  return res.data;
};

const editUser = async (usuario) => {
  const res = await axios.put(url + "/user", usuario);
  console.log(res);
  return res.data;
};

const deleteUser = async (id) => {
  const res = await axios.delete(url + "/deleteUser/" + id);
  console.log(res);
  return res.data;
};

const getAllUser = async () => {
  const res = await axios.get(url + "/allUser");
  console.log(res);
  return res.data;
};

export { addUser, getUser, editUser, deleteUser, getAllUser };
