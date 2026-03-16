import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => axios.get(API);
