let API_URL;

if (process.env["NODE_ENV"] === "development") {
  API_URL = "http://localhost:3000/api/v1";
} else {
  API_URL = "";
}

export default API_URL;
