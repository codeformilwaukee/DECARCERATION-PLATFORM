import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { useHistory, useLocation } from "react-router-dom";
import classes from './tabs.css';

/**
 * @type {Array<TabData>}
 */
const TABS_DATA = [
    /**
     * @typdef {Object} TabData
     * 
     * @property {string} label Label for a tab
     * @property {string} value The url the tab links to
     * 
     */

    {
        label: "Home",
        value: "/home"
    },
    {
        label: "Events",
        value: "/calendar"
    },
    {
        label: "Data & Advocacy",
        value: "/data"
    },
    {
        label: "About",
        value: "/about"
    }
]

/**
 * Get the TABS_DATA entry for a given path
 * 
 * @param {string} path A url path
 * 
 * @returns {TabData} Tab data for a specific path. Undefined if the
 * data cannot be found. 
 */
const tabFromPath = path => {
    const found = TABS_DATA.find(element => {
        return path === element.value;
    })

    return found;
}

const TabNavigation = () => {
    const location = useLocation();

    const history = useHistory();

    const [value, setValue] = useState(false);

    // Navigate to page location when a tab is selected
    const handleChange = (event, newValue) => {
        history.push(newValue);
    }

    // Set the selected tab using the url path when the location updates.
    // If the url path is not a tab, no tab is selected.
    useEffect(() => {
        const tabData = tabFromPath(location.pathname);
        const tabValue = tabData ? tabData.value : false;
        setValue(tabValue);
    }, [location])

    const tabList = TABS_DATA.map(data => {
        return <Tab key={data.value} value={data.value} label={data.label} />
    })
    return (
        <Tabs style={classes.root} value={value} onChange={handleChange} aria-label="Tabs list">
            {tabList}
        </Tabs>
    )
}

export default TabNavigation;