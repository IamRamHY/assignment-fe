import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const api = {
  get: async () => {},
  post: async ({ url, body }: { url: string; body: any }) => {
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}${url}`,
        data: body,
      });
      console.log({ response });
      const { statusCode, data } = response.data;
      if (statusCode === 200) return data;
    } catch (error) {
      console.log(error);
    }
  },
};
