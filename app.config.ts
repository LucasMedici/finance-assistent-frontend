import "dotenv/config";

export default {
  expo: {
    name: "finance-assistent-frontend",
    slug: "finance-assistent-frontend",
    android: {
      package: "com.lucasmedici.financeassistant",
    },
    extra: {
      API_URL: process.env.API_URL,
      eas: {
        projectId: "50b9f938-af3f-4561-aaff-310292b391e3",
      },
    },
  },
};
