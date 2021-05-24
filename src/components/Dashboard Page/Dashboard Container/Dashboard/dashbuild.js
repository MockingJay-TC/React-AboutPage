import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import Analytics from '../../Dashboard Component/Analytics/analytics';
import Course from '../../Dashboard Component/Courses/course';
import Transcript from '../../Dashboard Component/Transcript/transcript';
import Track from '../../Dashboard Component/Track/track';



class dashbuild extends Component {
    render() {
        return (
            <div className="maincontent">
                <Switch>
                    <Route exact path="/dashboard" component={Analytics}/>
                    <Route path="/dashboard/course" component={Course}/>
                    <Route path="/dashboard/transcript" component={Transcript}/>
                    <Route path="/dashboard/track" component={Track}/>
                </Switch>
             
               
            </div>
        );
    }
}

export default dashbuild;