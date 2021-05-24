import React, { Component } from 'react';
import Analytics from '../../component/Analytics/analytics';
import Overview from '../../component/Overview/overview';

class dashbuild extends Component {
    render() {
        return (
            <div className="maincontent">
                <Analytics/>
                <Overview/>
            </div>
        );
    }
}

export default dashbuild;