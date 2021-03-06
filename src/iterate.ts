import {executeCallback} from 'localforage-driver-commons';
import {Store} from './Store';

/**
 * Iterate over key/value pairs
 * @param iterator Iterator function
 * @param callback Callback for when the operation completes
 */
export function iterate(this: any, iterator: any, callback?: any) {
  const promise = this.ready().then(() => {
    const store = (<Store>this._dbInfo.mStore);
    const keys = store.keys();

    for (let i = 0; i < keys.length; i++) {
      let value = store.get(keys[i]);

      // If a result was found, parse it from the serialized
      // string into a JS object. If result isn't truthy, the
      // key is likely undefined and we'll pass it straight
      // to the iterator.
      if (value) {
        value = this._dbInfo.serializer.deserialize(value);
      }

      value = iterator(value, keys[i], i + 1);

      if (value !== undefined) {
        return value;
      }
    }
  });

  executeCallback(promise, callback);

  return promise;
}
