export const useHttp = (type, email, password) => {
  const apiKey = "AIzaSyCqBhZEtyAnSHz0pZp560b2FG02WP3x6M8";
  let url;
  if (type === "login")
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

  if (type === "register")
    url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;

  const request = () =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

  return request;
};
