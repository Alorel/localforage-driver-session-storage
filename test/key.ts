import {expect} from 'chai';
import {mkInstance} from './inc/mkInstance';

describe('key', () => {
  let d1: any;
  let d2: any;

  let k: string;

  before('init', () => {
    d1 = mkInstance();
    d2 = mkInstance();
  });

  before('set', async () => {
    await d1.setItem('foo', 1);
    await d1.setItem('bar', 2);
    await d2.setItem('qux', 3);
    await d2.setItem('baz', 4);
  });

  it('d1 k0 should be foo or bar', async () => {
    k = await d1.key(0);
    expect(k === 'foo' || k === 'bar').to.be.true;
  });

  it('d1 k1 should be foo or bar, different from k0', async () => {
    expect(await d1.key(1)).to.eq(k === 'foo' ? 'bar' : 'foo');
  });

  it('d2 k0 should be qux or baz', async () => {
    k = await d2.key(0);

    expect(k === 'qux' || k === 'baz').to.be.true;
  });

  it('d2 k1 should be qux or baz, different from k1', async () => {
    expect(await d2.key(1)).to.eq(k === 'qux' ? 'baz' : 'qux');
  });

  it('k2 should be null', async () => {
    expect(await d1.key(2)).to.be.null;
  });
});
