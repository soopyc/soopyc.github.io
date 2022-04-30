import * as bootstrap from 'bootstrap';
import {debug} from 'debug';

localStorage.debug = '*'

const mainLogger = debug("main");
mainLogger("Hello world");

/**
 * Initialize popper types
 * @param {String} type - Popper type to load
 * @returns {Array}
 */
function loadPoppers(type) {
    mainLogger(`loading poppers with type ${type}`)
    const poppers = [].slice.call(document.querySelectorAll(`[data-bs-toggle="tooltip"][data-popper-type="${type}"]`));
    mainLogger(`Found ${poppers.length} popper elements with type ${type}`)
    const popperList = poppers.map(element => {
        mainLogger(`Initializing popper element ${element}`)
        return new bootstrap.Tooltip(element)
    })
}

// console.log(
//   'Build info:',
//   new Date(process.env.BUILD_DATE),
//   process.env.BUILD_VERSION,
//   process.env.PACKAGE_VERSION,
// )

// if (module.hot) {
//     module.hot.accept();
// }
loadPoppers("license");
loadPoppers("social-info")