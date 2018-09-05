export default [{
    path: "/counter",
    component: "counter-page",
    action: () => {
        import("./pages/counter.page.js")
    }
},{
    path: "/(.*)",  
    component: "not-found-page",
    action: () => {
        import("../../shared/pages/notfound.page.js")
    }
}]