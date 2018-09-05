export default [{
    path: "/",
    component: "home-page",
    action: () => {
        import("./pages/home.page.js")
    }
}]