import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestUsers, changePage, followThunk, unfollowThunk } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
// import withAuthRedirect from "../HOC/withAuthRedirect";
import Users from "./Users";

const UsersContainer = () => {

  const { usersData, pageSize, totalCount, currentPage, isFetching, followingInProgress } = useSelector(state => state.usersPage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestUsers(currentPage, pageSize))
  }, [dispatch, currentPage, pageSize]);  

  const onPageChanged = (pageNumber) => {
    dispatch(changePage(pageNumber, pageSize))
  }

  const onFollow = (userID) => {
    dispatch(followThunk(userID))
  }

  const onUnfollow = (userID) => {
    dispatch(unfollowThunk(userID))
  }

  return (<>
    {isFetching ? <Preloader/> : null}
    <Users  pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            usersData={usersData}
            totalCount={totalCount}
            followingInProgress={followingInProgress}
            onFollow={onFollow}
            onUnfollow={onUnfollow}
            />
  </>)
}

export default UsersContainer;