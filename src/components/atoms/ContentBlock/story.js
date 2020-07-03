import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import ContentBlock from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-ContentBlock-index-vue'];

const theme = {
  White: 'white',
  Green: 'green',
};

storiesOf('atoms/ContentBlock', module)
  .add('default', () => ({
    components: { ContentBlock },
    props: {
      theme: {
        default: radios('Theme', theme, 'white'),
      },
    },
    template: `
      <content-block :theme="theme"></content-block>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });