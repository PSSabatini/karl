import { configure, addParameters, addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

// import '../src/scss/theme.scss';
// import '../src/scss/storybook.scss';

import Vue from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';

function loadStories() {
    const req = require.context('../src/components/', true, /story\.js/);
    req.keys().forEach(filename => req(filename));
}

const headers = [
    'atoms',
    'molecules',
    'organisms',
    'templates',
    'pages',
];

const storySort = (a, b) => {
    const aHeader = a[0].substr(0, a[0].indexOf('-'));
    const bHeader = b[0].substr(0, b[0].indexOf('-'));

    if (aHeader !== bHeader) {
        const aHeaderIndex = headers.findIndex(h => h === aHeader);
        const bHeaderIndex = headers.findIndex(h => h === bHeader);
        return aHeaderIndex - bHeaderIndex;
    }
    return 0;
};

addDecorator(withA11y);
addDecorator(withKnobs);
addParameters({
    options: {
        panelPosition: 'right',
        showRoots: true,
        storySort,
    },
});

configure(loadStories, module);