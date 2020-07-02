import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import CustomHeader from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-CustomButton-index-vue'];

storiesOf('molecules/CustomHeader', module)
  .add('default', () => ({
    components: { CustomHeader },
    props: {
    },
    template: `
          <custom-header></custom-header>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });