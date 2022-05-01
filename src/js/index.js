import {debug} from 'debug';

localStorage.debug = '*'

const mainLogger = debug("main");
mainLogger("Hello world");
