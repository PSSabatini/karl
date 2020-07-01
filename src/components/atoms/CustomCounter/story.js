import { storiesOf } from '@storybook/vue';
// this module
import CustomCounter from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-CustomButton-index-vue'];

storiesOf('atoms/CustomCounter', module)
  .add('default', () => ({
    components: { CustomCounter },
    template: `
          <custom-counter></custom-counter>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });