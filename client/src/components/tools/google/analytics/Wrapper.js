import React from 'react';

import { Route } from 'react-router-dom';

import PropTypes from 'prop-types';

/* Import the GA unit and tracking ID */
import * as ReactGA from 'react-ga';

import {
    trackingID
} from "../../../../configs/google/analytics/index";

class GoogleAnalytics extends React.Component {
    componentDidMount () {
        this.onChangePage(
            this.props.location.pathname,
            this.props.location.search
        )
    }

    componentDidUpdate ({ location: prevLocation }) {
        const { location: { pathname, search } } = this.props;
        /* Extract the booleans, which tell if something was changed */
        const isDifferentPathname = pathname !== prevLocation.pathname;
        const isDifferentSearch = search !== prevLocation.search;
        /* If any changes were tracked in url */
        if (isDifferentPathname || isDifferentSearch)
            this.onChangePage(pathname, search)
    }

    onChangePage = (pathname, search = '') => {
        const pageUrl = pathname + search;
        /* Extract location object from window */
        const { location } = window;
        /* Set current page for google analytics tracking */
        ReactGA.set({
            page: pageUrl,
            location: `${location.origin}${pageUrl}`,
            ...this.props.options
        });
        /* Mark page as viewed */
        ReactGA.pageview(pageUrl);
    };

    render () {
        return null;
    }
}

GoogleAnalytics.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
        search: PropTypes.string
    }).isRequired,
    options: PropTypes.object
};

const RouteTracker = () =>
    <Route component={GoogleAnalytics} />;

// const init = (options = {}) => {
//     const env = window._env_ || {};
//     const isGAEnabled = !!env.REACT_APP_GA_TRACKING_ID;
//
//     if (isGAEnabled) {
//         ReactGA.initialize(
//             env.REACT_APP_GA_TRACKING_ID, {
//                 debug: env.REACT_APP_GA_DEBUG === 'true',
//                 ...options
//             }
//         );
//     }
//
//     return isGAEnabled;
// };

const init = (options = {}) => {
    ReactGA.initialize(trackingID, {
        debug: true,
        ...options
    });
};

export default {
    GoogleAnalytics,
    RouteTracker,
    init
}