import {
    Router
} from "@vaadin/router";

export const router = new Router(document.getElementById("outlet"));

router.setRoutes([{
    path: "/",
    component: "main-app"
}]);