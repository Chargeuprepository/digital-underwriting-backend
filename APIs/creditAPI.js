import axios from "axios";
import https from "https";

export default async function creditAPI(creditParams) {
  console.log(creditParams);
  const url = "https://api.bureau.id/v2/services/credit-report-generation";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization:
        "Basic OWM4ZTFjNzYtNDViOS00ZDU2LWJkNDAtNzhmMmNlZGVhYmQ5OmEzMDE0MzNkLTYzODMtNDY5ZS1iN2I3LTUxNWM1MzcxNzgzNA==",
    },
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  };

  try {
    const response = await axios.post(url, creditParams, options);
    console.log(response);
    // return response.data;
  } catch (error) {
    // console.error("Error fetching data:", error);
  }
}
