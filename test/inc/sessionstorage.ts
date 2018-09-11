import {LocalStorage} from 'node-localstorage';
import * as tmp from 'tmp';

tmp.setGracefulCleanup();

global['localStorage'] = new LocalStorage(tmp.tmpNameSync());
global['sessionStorage'] = new LocalStorage(tmp.tmpNameSync());
