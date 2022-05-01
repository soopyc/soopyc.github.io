import debug from 'debug';
import { Tooltip } from 'bootstrap';

const logger = debug('main:utils');

/**
 * Initialize popper types
 * @param {String} type - Popper type to load
 * @returns {Array}
 */
export function loadPoppers(type) {
    logger(`loading poppers with type ${type}`);
    const poppers = [].slice.call(document.querySelectorAll(`[data-bs-toggle="tooltip"][data-popper-type="${type}"]`));
    logger(`Found ${poppers.length} popper elements with type ${type}`);
    const popperList = poppers.map(element => {
        logger(`Initializing popper element ${element}`);
        return new Tooltip(element);
    })

    return popperList;
}