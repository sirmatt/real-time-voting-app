/* jshint esversion: 6 */
import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('Immutability', () => {

  describe('an immutable number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    });

  });

  describe('an immutable list(array)', () => {
    function addMovie(currentState, newMovie) {
      return currentState.push(newMovie);
    }

    it('is immutable fersure', () => {
      let state = List.of('Reservoir Dogs', 'Pulp Fiction');
      let nextState = addMovie(state, 'Kill Bill');

      expect(nextState).to.equal(List.of(
        'Reservoir Dogs',
        'Pulp Fiction',
        'Kill Bill'
      ));

      expect(state).to.equal(List.of(
        'Reservoir Dogs',
        'Pulp Fiction'
      ));

    });
  });

  describe('an immutable tree(map)', () => {

    function addMovie(currentState, newMovie) {
      return currentState.update('movies', movies =>
        movies.push(newMovie)
      );
    }

    it('is immutable fersure', () => {
      let state = Map({
        movies: List.of('Kill Bill', 'Pulp Fiction')
      });
      let nextState = addMovie(state, '300');

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Kill Bill',
          'Pulp Fiction',
          '300'
        )
      }));
      expect(state).to.equal(Map({
        movies: List.of('Kill Bill', 'Pulp Fiction')
      }));
    });

  });

});
