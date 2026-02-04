import { atom, map } from 'nanostores';

export const show_viewer = atom(false);

export const zoomed_img = map<{
  src: string,
  alt: string,
  title?: string,
}>({
  src: '',
  alt: '',
});