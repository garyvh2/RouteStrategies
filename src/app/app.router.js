// Router
import { addRoutes, getRoutes } from "./routes/router";

import "./shared/components/navigation.component";

export function loadRoutes () {
    addRoutes([{
        path: "/",
        component: "navigation-component",
        children: () => import("./modules/content/content.routes.js").then(module => module.default)
    },{
        path: "/counters",
        component: "navigation-component",
        children: () => import("./modules/counter/counter.routes.js").then(module => module.default)
    },{
        path: "(.*)",
        component: "navigation-component",
        children: [{
            component: "404-page",
            action: () => {
                import("./shared/pages/404.page.js")
            }
        }]
    }]);
}