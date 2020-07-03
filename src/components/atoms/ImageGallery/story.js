import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
// required Knobs interfaces
import { text, boolean, radios, object } from '@storybook/addon-knobs';
// this module
import ImageGallery from './index.vue';
// module readme
import readme from './readme.md';

let githistory = process.env.historyfile['src-components-atoms-ImageGallery-index-vue'];

const images = [
  {
    src: 'flowpack_image.png',
    alt: 'Flowpack Hemp',
  },
  {
    src: 'tray.png',
    alt: 'Tray Hemp',
  },
];

storiesOf('atoms/ImageGallery', module)
  .add('default', () => ({
    components: { ImageGallery },
    props: {
      images: {
        default: object('Image Details', images),
      },
    },
    template: `
          <image-gallery :imageArray="images">
          </image-gallery>
    `,
  }), {
    notes: { markdown: readme + githistory },
  });