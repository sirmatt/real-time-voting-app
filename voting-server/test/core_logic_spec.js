/* jshint esversion: 6 */

import {List, Map} from 'immutable';
import {expect} from 'chai';

// imports function from file path specified
import {setEntries, next} from '../src/core';

describe('application logic', () => {

  describe('setEntries function', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Kill Bill', 'Pulp Fiction');
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('Kill Bill', 'Pulp Fiction')
      }));
    });

    it('converts JS array to immutable List', () => {
      const state = Map();
      const entries = ['Kill Bill', 'Pulp Fiction'];
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('Kill Bill', 'Pulp Fiction')
      }));
    });
  });

  describe('next function', () => {

    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of('Kill Bill', 'Pulp Fiction', 'Jackie Brown')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Kill Bill', 'Pulp Fiction')
        }),
        entries: List.of('Jackie Brown')
      }));
    });

  });



});
