import {dropInstanceCommon, executeCallback} from 'localforage-driver-commons';

export function dropInstance(this: any, _options: any, _cb?: any) {
  const {promise, callback} = dropInstanceCommon.apply(this, arguments);

  const outPromise = (<Promise<string>>promise).then<void>(keyPrefix => {
    for (let i = sessionStorage.length - 1; i >= 0; i--) {
      const key$ = sessionStorage.key(i);

      if (key$ !== null && key$.indexOf(keyPrefix) === 0) {
        sessionStorage.removeItem(key$);
      }
    }
  });

  executeCallback(outPromise, callback);

  return promise;
}
