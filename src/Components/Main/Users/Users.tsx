import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {  toggleFollowingProgress,setUsers, setCurrentPage,setTotalUserCount, toggleFetching } from '../../../Actions/Actions'
import User from './User'
import './Users.scss'
import { getUsersThunk, unfollowThunk, followThunk } from '../../../ThunkCreator/ThunkCreator'
import { Pagination } from 'antd';
import { UserType } from '../../../Types/Types'

type Props = {
    pageSize: number,
    isFetching: boolean,
    totalUsersCount: number,
    users: Array<UserType> | any,
    followingInProgress: any,
    currentPage: number,
    followThunk: any,
    unfollowThunk: any,
    getUsersThunk: any,
    usersPage:any,
}


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

const  mapStateToProps = (state: any) => {
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


