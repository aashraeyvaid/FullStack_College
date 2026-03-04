const errorHandler = (error, req, res, next) => {
    if (error.name === "ValidationError") {
        const details = Object.values(error.errors).map((err) => err.message);
        return res.status(400).json({ message: "Validation failed", details });
    }

    if (error.name === "CastError") {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    console.error(error);
    return res.status(500).json({ message: "Server error" });
};

export default errorHandler;
