import {executeCallback} from 'localforage-driver-commons';

export function clear(this: any, callback?: (err: any) => void): Promise<void> {
  const promise = this.ready().then(() => {
    const keyPrefix = this._dbInfo.keyPrefix;

    for (let i = sessionStorage.length - 1; i >= 0; i--) {
      let key$ = sessionStorage.key(i);

      if (key$ !== null && key$.indexOf(keyPrefix) === 0) {
        sessionStorage.removeItem(key$);
      }
    }
  });

  executeCallback(promise, callback);

  return promise;
}
