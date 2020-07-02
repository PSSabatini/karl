import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import ProductInfo from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-CustomButton-index-vue'];

storiesOf('molecules/ProductInfo', module)
  .add('default', () => ({
    components: { ProductInfo },
    props: {
    },
    template: `
        <product-info></product-info>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });