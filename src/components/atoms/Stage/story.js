import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import Stage from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-Stage-index-vue'];

storiesOf('atoms/Stage', module)
  .add('default', () => ({
    components: { Stage },
    props: {
    },
    template: `
          <stage>
            <p>HEMP HEMP</p>
            <p>HOORAY!</p>
          </stage>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });