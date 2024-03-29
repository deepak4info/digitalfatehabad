const express = require("express");
const router = express.Router();
const subcategoryController = require("../controllers/subcategoryController");
router.get(

  "/:categoryId/subcategories",
  subcategoryController.getAllSubcategories
);

router.get("/:categoryId/subcategoriesAll",subcategoryController.getSubcategoriesAll)
// POST create a new subcategory for a specific category
router.post(
  "/:categoryId/subcategories",
  // authMiddleware.verifyToken,
  subcategoryController.createSubcategory
);

// PUT update a subcategory for a specific category
router.put(
  "/:categoryId/subcategories/:id",
  // authMiddleware.verifyToken,
  subcategoryController.updateSubcategory
);

// DELETE a subcategory for a specific category
router.delete(
  "/:categoryId/subcategories/:id",
  // authMiddleware.verifyToken,
  subcategoryController.deleteSubcategory
);

router.get(
  "/sub/count",
  // authMiddleware.verifyToken,
  subcategoryController.getSubCategoriesCount
);
module.exports = router;
