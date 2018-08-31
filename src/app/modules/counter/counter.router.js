import {
    router
} from "../../app.router";

router.setRoutes([{
    path: "/counter",
    children: [{
        path: "/component",
        component: "counter-page"
    }]
}]);