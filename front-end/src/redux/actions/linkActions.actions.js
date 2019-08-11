const authActions = {
  UPDATE_LINK: 'UPDATE_LINK',
  UPDATE_TITLE: 'UPDATE_TITLE',
  CREATE_LINK: 'CREATE_LINK',
  SELECT_LINK: 'SELECT_LINK',
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
  createLink: (history) => {
    return (dispatch, getState) => {
      const currentState = getState().Link;
      dispatch({
        type: authActions.CREATE_LINK,
        payload: {
          link: currentState.link,
          title: currentState.title,
          date: new Date().toGMTString()
        }
      });

      history.push('/view');
    };
  },
  selectLink: (id, link, title, date) => {
    return (dispatch) => {
      dispatch({
        type: authActions.SELECT_LINK,
        payload: {
          id,
          link,
          title,
          date
        }
      });
    };
  }
};

export default authActions;
