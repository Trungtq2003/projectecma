import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = document.querySelector("#app");
import AdminProductAddPage from "./pages/admin/Product-add";
import AdminProductEditPage from "./pages/admin/Product-edit";
import AdminProductsPage from "./pages/admin/Products";
import HomePage from "./pages/HomePage";
import { render, router } from "./utilities";

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));

router.on("/admin/products", () => render(AdminProductsPage, app));
router.on("/admin/products/add", () => render(AdminProductAddPage, app));
router.on("/admin/products/:id/edit", ({ data }) => render(() => AdminProductEditPage(data), app));
router.notFound(() => render(NotFoundPage, app));
router.resolve();
