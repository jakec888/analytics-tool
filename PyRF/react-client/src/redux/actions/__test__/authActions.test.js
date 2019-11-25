import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  updateEmail,
  updatePassword
} from "../authActions.actions";

describe("Auth Actions test", () => {
  it("tests update email action", () => {
    const expectedAction = {
      type: UPDATE_EMAIL,
      payload: {
        email: "example@example.com"
      }
    };
    expect(updateEmail("example@example.com")).toEqual(expectedAction);
  });

  it("tests update password action", () => {
    const expectedAction = {
      type: UPDATE_PASSWORD,
      payload: {
        password: "sample-password"
      }
    };
    expect(updatePassword("sample-password")).toEqual(expectedAction);
  });

  it("tests the login actions", () => {});

  it("tests the logout actions", () => {});
});
