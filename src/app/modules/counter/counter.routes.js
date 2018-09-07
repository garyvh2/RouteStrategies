export default [{
    path: "/counter",
    component: "counter-view",
    action: () => {
        import("./views/counter/view.js")
    }
},{
    path: "/(.*)",  
    component: "not-found-view",
    action: () => {
        import("../../shared/views/notfound/view.js")
    }
}]