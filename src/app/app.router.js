/**
 * Router Helpers
 */
import { addRoutes } from "./utils/routerHelpers";

/**
 * Component Importings
 */
import "./shared/components/navigation.component";

export function loadRoutes () {
    addRoutes([{
        path: "/",
        component: "navigation-component",
        children: [{
            path: "/content",
            children: () => import("./modules/content/content.routes.js").then(module => module.default)
        },{
            path: "/counters",
            children: () => import("./modules/counter/counter.routes.js").then(module => module.default)
        },{
            path: "/shop",
            children: () => import("./modules/shop/shop.routes.js").then(module => module.default)
        },{
            path: "/(.*)",
            children: [{        
                component: "not-found-view",
                action: () => {
                    import("./shared/views/notfound/view.js")
                }
            }]
        }]
    }]);
}