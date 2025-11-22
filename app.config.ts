import "dotenv/config";

export default {
  expo: {
    name: "finance-assistent-frontend",
    slug: "finance-assistent-frontend",
    extra: {
      API_URL: process.env.API_URL,
    },
  },
};
