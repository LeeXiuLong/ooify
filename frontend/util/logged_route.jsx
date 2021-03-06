import { withRouter, Route, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Redirect to="/login" /> : <Component {...props} />
        }
    />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) }
};

export default withRouter(connect(mapStateToProps, null)(Auth));