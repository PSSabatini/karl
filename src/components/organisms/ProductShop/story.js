import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import ProductShop from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-organisms-ProductShop-index-vue'];

storiesOf('organisms/ProductShop', module)
  .add('default', () => ({
    components: { ProductShop },
    props: {
    },
    template: `
      <product-shop></product-shop>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });