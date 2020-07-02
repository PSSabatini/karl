import { storiesOf } from '@storybook/vue';
// this module
import BurgerMenu from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-CustomButton-index-vue'];

storiesOf('atoms/BurgerMenu', module)
  .add('default', () => ({
    components: { BurgerMenu },
    template: `
          <burger-menu></burger-menu>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });