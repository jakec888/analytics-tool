const authActions = {
  UPDATE_LINK: 'UPDATE_LINK',
  UPDATE_TITLE: 'UPDATE_TITLE',
  updateLink: (link) => {
    return (dispatch) => {
      dispatch({
        type: authActions.UPDATE_LINK,
        payload: { link: link }
      });
    };
  },
  updateTitle: (title) => {
    return (dispatch) => {
      dispatch({
        type: authActions.UPDATE_TITLE,
        payload: { title: title }
      });
    };
  },
  createLink: () => {
    return (dispatch, getState) => {
      const currentState = getState().Link;
      dispatch({
        type: authActions.CREATE_LINK,
        payload: { linkTitle: currentState }
      });
    };
  }
};

export default authActions;
