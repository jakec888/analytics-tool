// import uuidv4 from "uuid/v4";
import API from "../../api";

export const UPDATE_LINK = "UPDATE_LINK";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const CREATE_LINK = "CREATE_LINK";
export const SELECT_LINK = "SELECT_LINK";

export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: { title: title }
});

export const updateLink = link => ({
  type: UPDATE_LINK,
  payload: { link: link }
});

export const createLink = history => {
  return (dispatch, getState) => {
    const currentLinkState = getState().Link;
    const userId = getState().Auth.userId;

    const data = {
      userId: userId,
      link: currentLinkState.link,
      title: currentLinkState.title,
      date: new Date().toGMTString(),
      data: []
    };

    API.post("/api/link", data).then(result => {
      console.log(result);
      dispatch({
        type: CREATE_LINK,
        payload: result.data
      });
      history.push("/view");
    });
  };
};

export const selectLink = (history, id, link, title, date, data) => {
  return dispatch => {
    dispatch({
      type: SELECT_LINK,
      payload: {
        id,
        link,
        title,
        date,
        data
      }
    });
    history.push("/view");
  };
};
