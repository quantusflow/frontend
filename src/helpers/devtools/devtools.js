import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

exports = module.exports = createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-H" changePositionKey="ctrl-P" defaultIsVisible={false}>
        <LogMonitor/>
    </DockMonitor>
);