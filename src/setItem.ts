import {executeCallback, normaliseKey} from 'localforage-driver-commons';

export function setItem(this: any, key$: string, value: any, callback?: any) {
  key$ = normaliseKey(key$);

  const promise = this.ready().then(() => {
    // Convert undefined values to null.
    // https://github.com/mozilla/localForage/pull/42
    if (value === undefined) {
      value = null;
    }

    // Save the original value to pass to the callback.
    const originalValue = value;

    return new Promise<any>((resolve, reject) => {
      this._dbInfo.serializer.serialize(value, (value$: string, error: Error) => {
        if (error) {
          reject(error);
        } else {
          try {
            sessionStorage.setItem(`${this._dbInfo.keyPrefix}${key$}`, value$);
            resolve(originalValue);
          } catch (e) {
            reject(e);
          }
        }
      });
    });
  });

  executeCallback(promise, callback);

  return promise;
}
