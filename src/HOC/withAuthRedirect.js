import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const  mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuth
    }
}

export const withAuthRedirect = (WrappedComponent) => {
    const RedirectComponent = (props) => {
        if(!props.auth) {
            return <Redirect to={'login'}/>
        }
        return <WrappedComponent {...props} />}

        let ConnectedAuthRedirect = connect(mapStateToProps, null)(RedirectComponent)
    return ConnectedAuthRedirect
}

