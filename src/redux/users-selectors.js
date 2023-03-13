export const getUsersData = (state) => {
  return state.usersPage.usersData;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getTotalCount = (state) => {
  return state.usersPage.totalCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
