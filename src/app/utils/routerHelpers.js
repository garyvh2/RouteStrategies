/**
 * Vaadin Router
 */
import { Router } from "@vaadin/router";

let router;
/**
 * Initializes the router outlet taking as param a DOM node
 * @param {Node} outlet 
 */
export function init (outlet) {
    router = new Router(outlet);
}
/**
 * Exposed method to include routes from any sector of the application
 * @param {Object[]} routes 
 */
export function addRoutes (routes) {
    router.setRoutes(routes);
}
/**
 * Exposed method that allows getting all the registered routes
 */
export function getRoutes () {
    router.getRoutes();   
}
/**
 * Method that allows triggerin the popstate event on window, to force the vaadin re-render
 */
export function popState () {
    window.dispatchEvent(new PopStateEvent('popstate'));
}