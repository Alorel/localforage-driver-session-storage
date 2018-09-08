import {executeCallback, normaliseKey} from 'localforage-driver-commons';

export function removeItem(this: any, key$: string, callback?: any) {
  key$ = normaliseKey(key$);

  const promise = this.ready().then(() => {
    sessionStorage.removeItem(`${this._dbInfo.keyPrefix}${key$}`);
  });

  executeCallback(promise, callback);

  return promise;
}
