import React, { Component } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

export default ({ muscles, onSelect, category }) => {
    const index = category ? muscles.findIndex(group => group === category) + 1 : 0;

    const onIndexChange = (e, index) => {
        onSelect(index === 0 ? '' : muscles[index - 1])
    }
    return (
        <Paper>
            <Tabs
                value={index}
                indicatorColor="primary"
                textColor="primary"
                centered
                onChange={onIndexChange}
            >
                <Tab label='All' />
                {muscles.map(group =>
                    <Tab label={group} />
                )}

            </Tabs>
        </Paper>
    )
}
