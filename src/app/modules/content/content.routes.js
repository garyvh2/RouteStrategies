export default [{
    path: "/home",
    component: "home-page",
    action: () => {
        import("./pages/home.page.js")
    }
}]