export default [{
    path: "/counter",
    component: "counter-page",
    action: () => {
        import("./pages/counter.page.js")
    }
}]