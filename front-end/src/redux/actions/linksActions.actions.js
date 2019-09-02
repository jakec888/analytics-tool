import API from "../../api";

export const GET_LINKS = "GET_LINKS";

export const getLinks = () => {
  return (dispatch, getState) => {
    const userId = getState().Auth.userId;
    API.get(`/api/links/${userId}/`)
      .then(result => {
        console.log(result.data);
        dispatch({
          type: GET_LINKS,
          payload: { links: result.data }
        });
      })
      .catch(err => {
        console.log("ERROR");
        console.log(err);
      });
  };
};
