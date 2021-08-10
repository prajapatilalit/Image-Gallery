import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dvNGhJ2CNPL4XjWgTpVQYag0FCidzbO5bZSs6Pe0_Z4",
  },
});
