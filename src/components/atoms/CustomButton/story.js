import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import CustomButton from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-CustomButton-index-vue'];

storiesOf('atoms/CustomButton', module)
  .add('default', () => ({
    components: { CustomButton },
    props: {

    },
    template: `
          <custom-button></custom-button>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });