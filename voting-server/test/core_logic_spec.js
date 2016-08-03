/* jshint esversion: 6 */

import {List, Map} from 'immutable';
import {expect} from 'chai';

// imports function from file path specified
import {setEntries} from '../src/core';

describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Kill Bill', 'Pulp Fiction');
      const nextState = setEntries(state, entries);

      expect(nextState).to.equal(Map({
        entries: List.of('Kill Bill', 'Pulp Fiction')
      }));
    });

  });

});
