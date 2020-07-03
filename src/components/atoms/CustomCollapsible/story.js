import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import CustomCollapsible from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-CustomCollapsible-index-vue'];

storiesOf('atoms/CustomCollapsible', module)
  .add('default', () => ({
    components: { CustomCollapsible },
    props: {
      content: {
        default: text('Content', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
      },
    },
    template: `
          <custom-collapsible>
          {{ content }}
          </custom-collapsible>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });