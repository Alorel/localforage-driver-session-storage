import {expect} from 'chai';
import './inc/defineDriver';
import {mkInstance} from './inc/mkInstance';

describe('dropInstance', () => {
  const d1 = mkInstance();
  const d2 = mkInstance();

  before('initDrivers', () => Promise.all([
    d1.setItem('foo', 'bar'),
    d2.setItem('foo', 'bar')
  ]));
  before('drop', () => d1.dropInstance());

  it('d1 should be empty', async () => {
    expect(await d1.length()).to.eq(0);
  });
  it('d2 should not be empty', async () => {
    expect(await d2.length()).to.eq(1);
  });
});
