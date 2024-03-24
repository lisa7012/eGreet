import {
  Poppins,
  Indie_Flower,
  Bona_Nova,
  Leckerli_One,
  Cherry_Bomb_One,
} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

const indie_flower = Indie_Flower({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--indie-flower',
});

const bona_nova = Bona_Nova({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--bona-nova',
});

const leckerli_one = Leckerli_One({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--leckerli-one',
});

const cherry_bomb_one = Cherry_Bomb_One({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--cherry-bomb-one',
});

export const fonts = {
  poppins: poppins,
  indie_flower: indie_flower,
  bona_nova: bona_nova,
  leckerli_one: leckerli_one,
  cherry_bomb_one: cherry_bomb_one,
};
