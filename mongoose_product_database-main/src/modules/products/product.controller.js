import Product from "./product.model.js";


const createProduct = async (req, res, next) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};


const getProducts = async (req, res, next) => {
    try {
        
        const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1);

        
        const limit = Math.min(Math.max(Number.parseInt(req.query.limit, 10) || 10, 1), 50);

        
        const skip = (page - 1) * limit;

        
        const [items, total] = await Promise.all([
            Product.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
            Product.countDocuments(),
        ]);

        res.json({
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
            items,
        });
    } catch (error) {
        next(error);
    }
};


const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.json(product);
    } catch (error) {
        return next(error);
    }
};


const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.json(product);
    } catch (error) {
        return next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.json({ message: "Product deleted" });
    } catch (error) {
        return next(error);
    }
};

export { createProduct, deleteProduct, getProductById, getProducts, updateProduct };
