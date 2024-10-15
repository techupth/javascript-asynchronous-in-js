// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here

// async function JohnProfile() {
//   try{
//     const data = await getJohnProfile()
//     console.log(data)
//   }catch{
//     console.error("Error:", error);
//   }
// }

const JohnProfile = async () => {
  try {
    const data = await getJohnProfile();
    console.log(data);
  } catch {
    console.error("Error:", error);
  }
};

JohnProfile()
