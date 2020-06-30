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
  Invert: '--invert',
  Dont_Invert: '',
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
      disabled: {
        default: boolean('Disabled', false),
      },
      color: {
        default: radios('Color', colorOptions, 'neutral'),
      },
    },
    template: `
          <custom-button :color="color" :invert="invert" :label="label" :disabled="disabled"></custom-button>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });