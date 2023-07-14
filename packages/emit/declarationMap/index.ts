import os from 'os';

const arch = os.arch;

export const enum Album {
  JimmyEatWorldFutures = 1,
  TubRingZooHypothesis = 2,
  DogFashionDiscoAdultery = 3,
}
 
const selectedAlbum = Album.JimmyEatWorldFutures;
if (selectedAlbum === Album.JimmyEatWorldFutures) {
  console.log("That is a great choice.");
}
/**
 * This will give you a string value which is the arch of your computer
 */
export default arch;

console.log(arch);