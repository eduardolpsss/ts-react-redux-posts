import * as actionTypes from './actionTypes';

export function simulateHttpRequest(action: PostAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export function addPost(post: IPost) {
  const action: PostAction = {
    type: actionTypes.ADD_POST,
    post,
  }
    return simulateHttpRequest(action);
}

export function deletePost(post: IPost) {
  const action: PostAction = {
    type: actionTypes.DELETE_POST,
    post,
  }
    return simulateHttpRequest(action);
}

