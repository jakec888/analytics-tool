import selectedReducer from "../selectedReducer.reducers";

describe("Auth Reducer test", () => {
  it("update link reducer test", () => {
    const excepctedReducer = {
      id: "",
      redirectURL: "",
      userId: "",
      link: [],
      title: "",
      date: "",
      data: []
    };

    expect(
      selectedReducer(undefined, {
        type: "UPDATE_LINK",
        payload: { link: [] }
      })
    ).toEqual(excepctedReducer);
  });

  it("update title reducer test", () => {
    const excepctedReducer = {
      id: "",
      redirectURL: "",
      userId: "",
      link: "",
      title: "sample title",
      date: "",
      data: []
    };

    expect(
      selectedReducer(undefined, {
        type: "UPDATE_TITLE",
        payload: { title: "sample title" }
      })
    ).toEqual(excepctedReducer);
  });

  it("create link reducer test", () => {});

  it("create link success reducer test", () => {});

  it("select link reducer test", () => {});

  it("initial state", () => {
    expect(selectedReducer(undefined, {})).toEqual({
      id: "",
      redirectURL: "",
      userId: "",
      link: "",
      title: "",
      date: "",
      data: []
    });
  });
});
