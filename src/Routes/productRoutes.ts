import { Router } from 'express';
import { createProduct, searchProducts, getPaginatedProducts, filterProductsByPrice } from '../Controllers/productController';

const router = Router();

router.post('/products', createProduct);
router.get('/products/search', searchProducts);
router.get('/products/paginated', getPaginatedProducts);
router.get('/products/filter', filterProductsByPrice);

export default router;
