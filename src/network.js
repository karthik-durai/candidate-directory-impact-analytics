import axios from "axios";

export default axios.create({
  baseURL:
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json",
  timeout: 10000,
});
