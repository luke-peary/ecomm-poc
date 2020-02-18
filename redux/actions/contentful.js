import ContentfulServices from "../../services/ContentfulAPI";

export function fetchPage(url) {
  return dispatch => {
    dispatch(getPageBegin());
    ContentfulServices.getPage(url)
      .then(({ items }) => {
        const page = items[0];
        dispatch(getPageSuccess(page));
        return res.page;
      })
      .catch(error => {
        dispatch(getPageFailure(error));
      });
  };
}

export const getPageBegin = url => ({
  type: "GET_PAGE_BEGIN",
  payload: { url }
});

export const getPageSuccess = page => ({
  type: "GET_PAGE_SUCCESS",
  payload: { page }
});

export const getPageFailure = error => ({
  type: "GET_PAGE_FAILURE",
  payload: { error }
});
