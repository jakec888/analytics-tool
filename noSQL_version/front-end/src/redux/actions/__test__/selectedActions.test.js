import {
  UPDATE_LINK,
  UPDATE_TITLE,
  updateTitle,
  updateLink
} from "../selectedActions.actions";

describe("Selected Actions tests", () => {
  it("tests the update title action", () => {
    const expectedAction = {
      type: UPDATE_TITLE,
      payload: {
        title: "Example Title"
      }
    };
    expect(updateTitle("Example Title")).toEqual(expectedAction);
  });

  it("tests the update link actions", () => {
    const expectedAction = {
      type: UPDATE_LINK,
      payload: {
        link: "https://nodejs.org/en/"
      }
    };
    expect(updateLink("https://nodejs.org/en/")).toEqual(expectedAction);
  });

  it("tests the create link actions", () => {});

  it("tests the create link success actions", () => {});

  it("tests the select link actions", () => {});
});
