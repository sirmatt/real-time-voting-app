/* jshint esversion: 6 */
import {List, Map} from 'immutable';

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

export function next(state) {
  // Grabs the Immutable List of movies in the state
  const entries = state.get('entries');
  return state.merge({
    vote: Map({
      pair: entries.take(2)
    }),
    entries: entries.skip(2)
  });
}
