export const useUpdateCurrentUser = () => {
  const update = (email, newInfo) => {
    fetch("https://techshop-f37c5-default-rtdb.firebaseio.com/users.json")
      .then((res) => res.json())
      .then((data) => {
        let exactUser;
        let exactUserPath;
        for (const key in data) {
          if (data[key].email === email) {
            exactUser = data[key];
          }
          exactUserPath = key;
        }
        console.log(exactUser);
        fetch(
          `https://techshop-f37c5-default-rtdb.firebaseio.com/users/${exactUserPath}.json`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify({
              ...exactUser,
              ...newInfo,
           
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => console.log(data));
      });
  };

  return update;
};
