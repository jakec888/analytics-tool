import { UPDATE_LINK, updateLink } from "../selectedActions.actions";

describe("Selected Actions tests", () => {
  it("tests the update link actions", () => {
    const expectedAction = {
      type: UPDATE_LINK,
      payload: {
        link: "https://nodejs.org/en/"
      }
    };
    expect(updateLink("https://nodejs.org/en/")).toEqual(expectedAction);
  });
});
