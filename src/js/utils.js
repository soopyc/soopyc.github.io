import { Tooltip } from 'bootstrap';

/**
 * Initialize popper types
 * @param {String} type - Popper type to load
 * @returns {Array}
 */
export function loadPoppers(type) {
    console.log(`loading poppers with type ${type}`);
    const poppers = [].slice.call(document.querySelectorAll(`[data-bs-toggle="tooltip"][data-popper-type="${type}"]`));
    console.log(`Found ${poppers.length} popper elements with type ${type}`);
    const popperList = poppers.map(element => {
        console.log(`Initializing popper element ${element}`);
        return new Tooltip(element);
    })

    return popperList;
}