// Router
import { addRoutes, getRoutes } from "./routes/router";

import "./shared/components/navigation.component";

export function loadRoutes () {
    addRoutes([{
        path: "/home",
        component: "navigation-component",
        children: () => import("./modules/content/content.routes.js").then(module => module.default)
    },{
        path: "/counters",
        component: "navigation-component",
        children: () => import("./modules/counter/counter.routes.js").then(module => module.default)
    },{
        path: "/(.*)",
        component: "navigation-component",
        children: [{        
            component: "not-found-page",
            action: () => {
                import("./shared/pages/notfound.page.js")
            }
        }]
    }]);
}