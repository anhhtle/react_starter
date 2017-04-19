require('babel-polyfill');
import React from 'react';
import ReactDom from 'react-dom';

import PersonList from './components/person-list';

document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(<PersonList />, document.getElementById('app'));
});

