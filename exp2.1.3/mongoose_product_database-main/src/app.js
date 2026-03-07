import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";
import productRoutes from "./modules/products/product.routes.js";


const app = express();


app.use(express.json());


app.get("/", (req, res) => {
	res.json({
		message: "Product API is running",
		endpoints: [
			"POST /api/products",
			"GET /api/products",
			"GET /api/products/:id",
			"PUT /api/products/:id",
			"DELETE /api/products/:id",
		],
	});
});

app.use("/api/products", productRoutes);


app.use(notFound);
app.use(errorHandler);

export default app;
