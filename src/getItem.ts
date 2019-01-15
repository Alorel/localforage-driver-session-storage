import {executeCallback, normaliseKey} from 'localforage-driver-commons';
import {Store} from './Store';

export function getItem(this: any, key$: string, callback?: any) {
  key$ = normaliseKey(key$);

  const promise = this.ready().then(() => {
    const result = (<Store>this._dbInfo.mStore).get(key$);

    // Deserialise if result isn't null/undefined, else return null
    return result == null ? null : this._dbInfo.serializer.deserialize(result); //tslint:disable-line:triple-equals
  });

  executeCallback(promise, callback);

  return promise;
}
