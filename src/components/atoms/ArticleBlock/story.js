import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import ArticleBlock from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-ArticleBlock-index-vue'];

storiesOf('atoms/ArticleBlock', module)
  .add('default', () => ({
    components: { ArticleBlock },
    props: {
    },
    template: `
      <article-block></article-block>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });