const apiUrl = "https://fathomless-cove-96315.herokuapp.com/car";

const buildFetchConfig = (method, body = null) => {
  return {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      key:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhbWlsYUBjYW1pbGEuY29tIiwiaWF0IjoxNTY1MTgyOTU1LCJleHAiOjE1NjUyNjkzNTV9.5JE1Jjl6HDcO96Tk3YOEGk0hHIHWkIOVb-HVwmtx4lo"
    },
    body,
  };
};

const get = async () => {
  try {
    return await fetch(apiUrl, buildFetchConfig("GET")).then(res => res.json());
  } catch (error) {
    throw error;
  }
};

const put = async (id, body) => {
  try {
    return await fetch(`${apiUrl}/${id}`, buildFetchConfig("PUT", body)).then(res => res.json());
  } catch (error) {
    throw error;
  }
};

const remove = async (id) => {
  try {
    return await fetch(`${apiUrl}/${id}`, buildFetchConfig("DELETE")).then(res => res.json());
  } catch (error) {
    throw error;
  }
};

const post = async body => {
  try {
    return await fetch(apiUrl, buildFetchConfig("POST", body)).then(res =>
      res.json()
    );
  } catch (error) {
    throw error;
  }
};

export { get, post, remove, put };
