export const UPDATE_LINK = "UPDATE_LINK";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const CREATE_LINK = "CREATE_LINK";
export const SELECT_LINK = "SELECT_LINK";
export const GET_LINKS = "GET_LINKS";
export const CREATE_LINK_SUCCESS = "CREATE_LINK_SUCCESS";

export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: { title: title }
});

export const updateLink = link => ({
  type: UPDATE_LINK,
  payload: { link: link }
});

export const createLink = (selectedLink, userId, history) => ({
  type: CREATE_LINK,
  payload: { selectedLink, userId, history }
});

export const createLinkSuccess = payload => ({
  type: CREATE_LINK_SUCCESS,
  payload: payload
});

// Pre Saga
// import API from "../../api";
//
// export const createLink = history => {
//   return (dispatch, getState) => {
//     const selectedLink = getState().Selected;
//     const userId = getState().Auth.userId;

//     const data = {
//       userId: userId,
//       link: selectedLink.link,
//       title: selectedLink.title,
//       date: new Date().toGMTString(),
//       data: []
//     };

//     API.post("/api/link", data).then(result => {
//       console.log(result);
//       dispatch({
//         type: CREATE_LINK,
//         payload: result.data
//       });
//       history.push("/view");
//     });
//   };
// };

export const selectLink = (
  history,
  _id,
  redirectURL,
  link,
  title,
  date,
  data
) => {
  return dispatch => {
    dispatch({
      type: SELECT_LINK,
      payload: {
        _id,
        redirectURL,
        link,
        title,
        date,
        data
      }
    });
    history.push("/view");
  };
};
