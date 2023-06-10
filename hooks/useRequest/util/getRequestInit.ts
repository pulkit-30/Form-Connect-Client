import { UseRequestOptions } from "../types";

const getRequestInit = (accessToken: string, options?: UseRequestOptions) => {
  const { headers, body, method } = options || {};
  const inferredMethod = body ? "POST" : "GET";

  const init = {
    method: method ?? inferredMethod,
    ...(body ? { body: JSON.stringify(body) } : {}),
    headers: {
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      ...(body && { "Content-Type": "application/json" }),
      ...headers,
    },
  };

  return init;
};

export default getRequestInit;
