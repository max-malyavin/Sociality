import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {  toggleFollowingProgress,setUsers, setCurrentPage,setTotalUserCount, toggleFetching } from '../../../Actions/Actions'
import User from './User'
import './Users.scss'
import { getUsersThunk, unfollowThunk, followThunk } from '../../../ThunkCreator/ThunkCreator'
import { Pagination } from 'antd';
import { UserType } from '../../../Types/Types'
import { AppStateType } from '../../../Redux/Redux-store'




type MapStatePropsType = {
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType> | any,
    currentPage: number,
    usersPage:any,
}
type MapDispatchPropsType = {
    followThunk: any,
    unfollowThunk: any,
    getUsersThunk: any,
    followingInProgress: any,
}

type OwnPropsType = {
}

type Props = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const Users: React.FC<Props> = ({users: {usersPage: {users, pageSize, isFetching, totalUsersCount,
    followingInProgress,currentPage}},
    followThunk, unfollowThunk,
     getUsersThunk
    }) => {
 
    useEffect(() => {
        getUsersThunk( currentPage,pageSize )
      }, []);
   
      const onPageChanged = (pageNumber:number) => {
        getUsersThunk( pageNumber,pageSize )
      }

    return (<>
        { isFetching 
          ? <><div id="cube-loader-user">
                <div className="caption">
                    <div className="cube-loader">
                      <div className="cube loader-1"></div>
                      <div className="cube loader-2"></div>
                      <div className="cube loader-4"></div>
                      <div className="cube loader-3"></div>
                    </div>
                </div>
            </div>
            </>
            : null
        }


        {isFetching ? null : <div>
            <div style={{display: 'flex', marginTop: '30px', flexWrap: 'wrap',justifyContent: 'space-between'}}>
            {users.map((u: any)=> <User
             follow ={followThunk}
             unfollow ={unfollowThunk}
             followingInProgress={followingInProgress}
             {...u}
                key={u.id}/>)}
                </div>
                <div style={{textAlign:'center', marginTop: '30px', marginBottom: '50px'}}>
                <Pagination showQuickJumper pageSize={pageSize} onChange={onPageChanged} current={currentPage}
                 defaultCurrent={currentPage} total={totalUsersCount} />
            </div>
        </div>
        }
    </>
    )
}

const  mapStateToProps = (state: AppStateType) => {
    return {
        users: state
    }
}
export default connect( mapStateToProps,{
     followThunk, unfollowThunk,setUsers,
    setCurrentPage, setTotalUserCount,
    toggleFetching,  toggleFollowingProgress,
    getUsersThunk
})(Users);


