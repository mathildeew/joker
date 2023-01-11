import { dadJoke } from './joker.js';

export function dadJoke() {
  return new Promise(function (resolve, reject) {
    try {
      joker.getRandomDadJoke(function (joke) {
        resolve(joke);
      });
    } catch (error) {
      reject(error);
    }
  });
}

testDadJoke();
