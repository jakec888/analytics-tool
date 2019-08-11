const authActions = {
  UPDATE_LINK: 'UPDATE_LINK',
  updateLink: (link) => {
    return (dispatch) => {
      dispatch({
        type: authActions.UPDATE_LINK,
        payload: { link: link }
      });
    };
  }
};

export default authActions;
