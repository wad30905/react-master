import axios from "axios";
export async function fetchPerson() {
  const response = await axios({
    method: "get",
    withCredentials: true,
    url: `https://randomuser.me/api/`,
  });

  return response.data;
}