import {clone, getKeyPrefix, LocalForageOptions, serialiser} from 'localforage-driver-commons';
import {_support} from './_support';

export function _initStorage(this: any, options?: LocalForageOptions): any {
  if (!_support) {
    return Promise.reject(new Error('localStorage not supported'));
  }

  this._dbInfo = options ? clone(options) : {};
  this._dbInfo.serializer = serialiser;
  this._dbInfo.keyPrefix = getKeyPrefix(options || {}, this._defaultConfig);

  return Promise.resolve();
}
