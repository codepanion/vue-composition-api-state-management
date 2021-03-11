export const login = async () =>
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        firstName: "John",
        lastName: "Doe",
      });
    }, 3000);
  });
