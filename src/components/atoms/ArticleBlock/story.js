import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import ArticleBlock from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-CustomButton-index-vue'];

const theme = {
  White: 'white',
  Green: 'green',
};

storiesOf('atoms/ArticleBlock', module)
  .add('default', () => ({
    components: { ArticleBlock },
    props: {
      theme: {
        default: radios('Theme', theme, 'white'),
      },
    },
    template: `
      <article-block :theme="theme"></article-block>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });