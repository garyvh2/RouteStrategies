export default [{
    path: "/shop",
    component: "shop-page",
    action: () => {
        import("./pages/shop.page.js")
    }
},{
    path: "/(.*)",  
    component: "not-found-page",
    action: () => {
        import("../../shared/pages/notfound.page.js")
    }
}]