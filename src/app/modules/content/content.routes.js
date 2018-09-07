export default [{
    path: "/home",
    component: "home-view",
    action: () => {
        import("./views/home/view.js")
    }
},{
    path: "/vaadin",
    component: "vaadin-view",
    action: () => {
        import("./views/vaadin/view.js")
    }
},{
    path: "/(.*)",  
    component: "not-found-view",
    action: () => {
        import("../../shared/views/notfound/view.js")
    }
}]