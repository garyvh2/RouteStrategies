export default [{
    path: "/shop",
    component: "shop-view",
    action: () => {
        import("./views/shop/view.js")
    }
},{
    path: "/(.*)",  
    component: "not-found-view",
    action: () => {
        import("../../shared/views/notfound/view.js")
    }
}]