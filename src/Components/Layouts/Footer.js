import React, { Component } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default ({ muscles, onSelect, category }) => {
    const index = category ? muscles.findIndex(group => group === category) + 1 : 0;
    const isLargeScreen = useMediaQuery('(min-width:600px)');
    console.log(isLargeScreen);
    const strIsSmallScreen = (isLargeScreen) ? 'true' : 'false';
    const onIndexChange = (e, index) => {
        onSelect(index === 0 ? '' : muscles[index - 1])
    }
    return (
        <Paper>
            <Tabs
                value={index}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                centered={isLargeScreen}
                scrollable={strIsSmallScreen}
                onChange={onIndexChange}
            >
                <Tab label='All' />
                {muscles.map(group =>
                    <Tab
                        key={group}
                        label={group}
                    />
                )}

            </Tabs>
        </Paper>
    )
}
