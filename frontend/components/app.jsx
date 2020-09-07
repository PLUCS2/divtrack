import React from 'react'; 
import SplashContainer from './splash/logged_out_splash/splash_container'; 
import HomeContainer from './splash/logged_in_splash/home_container'; 
import Modal from './modal/modal'; 
import UserProfile from './profile/user_profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => {
    return (
        <div>
            <Modal /> 
            <AuthRoute exact path="/" component={SplashContainer} /> 
            <ProtectedRoute exact path="/home" component={HomeContainer} /> 
            <ProtectedRoute exact path="/profile/:id" component={UserProfile} />
        </div>
    )
}; 