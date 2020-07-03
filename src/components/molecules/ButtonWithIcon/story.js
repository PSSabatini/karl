import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import ButtonWithIcon from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-molecules-ButtonWithIcon-index-vue'];

const iconOptions = {
  'Apple Pay': 'applepay',
  'Add Cart': 'cart-plus',
  'Arrow Left': 'chevron_left',
  Paypal: 'paypal',
};

const colorOptions = {
  Neutral: 'neutral',
  Black: 'black',
  Yellow: 'yellow',
  Brown: 'brown',
  Green: 'green',
  Orange: 'orange',
};

const position = {
  left: 'left',
  right: 'right',
};

storiesOf('molecules/ButtonWithIcon', module)
  .add('default', () => ({
    components: { ButtonWithIcon },
    props: {
      label: {
        default: text('Label', 'Express Checkout'),
      },
      icons: {
        default: radios('Icon', iconOptions, 'applepay'),
      },
      position: {
        default: radios('Icon Position', position, 'left'),
      },
      color: {
        default: radios('Color', colorOptions, 'neutral'),
      },
    },
    template: `
      <button-with-icon 
        :iconOption="icons" 
        :color="color" 
        :position="position" 
        :label="label">
      </button-with-icon>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });