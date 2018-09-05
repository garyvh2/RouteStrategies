// Vaadin Router
import { Router } from "@vaadin/router";

let router;
export function init (outlet) {
    router = new Router(outlet);
}

export function addRoutes (routes) {
    router.setRoutes(routes);
}

export function getRoutes () {
    router.getRoutes();   
}