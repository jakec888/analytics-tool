import authReducers from "../authReducers.reducers";

describe("Auth Reducer test", () => {
  it("logout reducer test", () => {});

  it("email case reducer test", () => {
    const excepctedReducer = {
      idToken: "",
      userId: "",
      isLoggedIn: false,
      email: "example@example.com",
      password: "zapefol@app-expert.com"
    };

    expect(
      authReducers(
        {
          idToken: "",
          userId: "",
          isLoggedIn: false,
          email: "zapefol@app-expert.com",
          password: "zapefol@app-expert.com"
        },
        {
          type: "UPDATE_EMAIL",
          payload: {
            email: "example@example.com"
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
      email: "zapefol@app-expert.com",
      password: "example-password"
    };

    expect(
      authReducers(
        {
          idToken: "",
          userId: "",
          isLoggedIn: false,
          email: "zapefol@app-expert.com",
          password: "zapefol@app-expert.com"
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
      email: "zapefol@app-expert.com",
      password: "zapefol@app-expert.com"
    });
  });
});
