import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios } from '@storybook/addon-knobs';
// this module
import CustomButton from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-CustomButton-index-vue'];

const colorOptions = {
  Neutral: 'neutral',
  Black: 'black',
  Yellow: 'yellow',
  Brown: 'brown',
  Green: 'green',
  Orange: 'orange',
};

const invertOptions = {
  invert: '--invert',
  Dont_Invert: '',
};

const borderOptions = {
  with_border: '--border',
  without_border: '',
};

storiesOf('atoms/CustomButton', module)
  .add('default', () => ({
    components: { CustomButton },
    props: {
      label: {
        default: text('Label', 'button'),
      },
      invert: {
        default: radios('Invert', invertOptions, ''),
      },
      border: {
        default: radios('Border', borderOptions, ''),
      },
      disabled: {
        default: boolean('Disabled', false),
      },
      color: {
        default: radios('Color', colorOptions, 'neutral'),
      },
    },
    template: `
          <custom-button :color="color" :invert="invert" :border="border" :disabled="disabled">
          {{ label }}
          </custom-button>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });