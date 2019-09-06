export const GET_LINKS = "GET_LINKS";
export const GET_LINKS_SUCCESS = "GET_LINKS_SUCCESS";

export const getLinks = userId => ({
  type: GET_LINKS,
  payload: { userId }
});

export const getLinksSuccess = links => ({
  type: GET_LINKS_SUCCESS,
  payload: { links }
});

// Pre Saga
// export const getLinks = () => {
//   return (dispatch, getState) => {
//     const userId = getState().Auth.userId;
//     API.get(`/api/links/${userId}/`)
//       .then(result => {
//         console.log(result.data);
//         dispatch({
//           type: GET_LINKS,
//           payload: {
//             links: result.data.sort(
//               (a, b) => new Date(b.date) - new Date(a.date)
//             )
//           }
//         });
//       })
//       .catch(err => {
//         console.log("ERROR");
//         console.log(err);
//       });
//   };
// };
