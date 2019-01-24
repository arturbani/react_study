import axios from "axios";

// Configuration
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ffb51f2cbac4ceb9f099bb0c013a8995e2482eeda9830641b7f233706347ffea"
  }
});
