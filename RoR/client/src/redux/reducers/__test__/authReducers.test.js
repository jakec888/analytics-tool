import authReducers from "../authReducers.reducers";

describe("Auth Reducer test", () => {
  it("logout reducer test", () => {});

  it("email case reducer test", () => {
    const excepctedReducer = {
      idToken: "",
      userId: "",
      isLoggedIn: false,
      email: "jaconjcondes@gmail.com",
      password: "helloworld"
    };

    expect(
      authReducers(
        {
          idToken: "",
          userId: "",
          isLoggedIn: false,
          email: "jaconjcondes@gmail.com",
          password: "helloworld"
        },
        {
          type: "UPDATE_EMAIL",
          payload: {
            email: "jaconjcondes@gmail.com"
          }
        }
      )
    ).toEqual(excepctedReducer);
  });

  it("email case reducer test", () => {
    const excepctedReducer = {
      idToken: "",
      userId: "",
      isLoggedIn: false,
      email: "jaconjcondes@gmail.com",
      password: "example-password"
    };

    expect(
      authReducers(
        {
          idToken: "",
          userId: "",
          isLoggedIn: false,
          email: "jaconjcondes@gmail.com",
          password: "helloworld"
        },
        {
          type: "UPDATE_PASSWORD",
          payload: {
            password: "example-password"
          }
        }
      )
    ).toEqual(excepctedReducer);
  });

  it("singup success reducer test", () => {});

  it("login success reducer test", () => {});

  it("initial state", () => {
    expect(authReducers(undefined, {})).toEqual({
      idToken: "",
      userId: "",
      isLoggedIn: false,
      email: "jaconjcondes@gmail.com",
      password: "helloworld"
    });
  });
});
