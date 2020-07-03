import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios, object } from '@storybook/addon-knobs';
// this module
import ProductFeatures from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-ProductFeatures-index-vue'];

const imageDetails = [
  {
    src: 'Koffein.svg',
    name: 'Koffein',
    description: 'Mit reinem Koffein',
  },
  {
    src: 'Hoher Ballaststoffgehalt.svg',
    name: 'Hoher Ballaststoffgehalt',
    description: 'Hoher Gehalt an Ballaststoffen',
  },
  {
    src: 'Ohne Zuckerzusatz.svg',
    name: 'Ohne Zuckerzusatz',
    description: 'Ohne Zusatz von Zucker',
  },
  {
    src: 'Vegan.svg',
    name: 'Vegan',
    description: 'Vegan',
  },
  {
    src: 'Proteinquelle.svg',
    name: 'Proteinquelle',
    description: 'Proteinquelle',
  },
  {
    src: 'Bio Siegel.svg',
    name: 'Biologish',
    description: 'Biologish',
  },
];

storiesOf('atoms/ProductFeatures', module)
  .add('default', () => ({
    components: { ProductFeatures },
    props: {
      imageDetails: {
        default: object('Image Details', imageDetails),
      },
    },
    template: `
          <product-features :imageArray="imageDetails">
          </product-features>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });