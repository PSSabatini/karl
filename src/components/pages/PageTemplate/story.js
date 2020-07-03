import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios, object } from '@storybook/addon-knobs';
// this module
import PageTemplate from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-pages-PageTemplate-index-vue'];

storiesOf('pages/PageTemplate', module)
  .add('default', () => ({
    components: { PageTemplate },
    props: {
    },
    template: `
      <page-template></page-template>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });