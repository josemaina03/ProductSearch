import { Request, Response } from 'express';
import pool from '../config';
import { Product, ProductSearchParams, ProductFilterParams } from '../Model/productModel';

export const createProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body as Product;
  try {
    await pool.request()
      .input('Name', name)
      .input('Price', price)
      .execute('InsertProduct');
    res.status(201).send('Product created successfully');
  } catch (error) {
    const err = error as Error;
    res.status(500).send(err.message);
  }
};

export const searchProducts = async (req: Request, res: Response) => {
  const { name } = req.query as ProductSearchParams;
  try {
    const result = await pool.request()
      .input('Name', name)
      .execute('SearchProducts');
    res.status(200).json(result.recordset);
  } catch (error) {
    const err = error as Error;
    res.status(500).send(err.message);
  }
};

export const getPaginatedProducts = async (req: Request, res: Response) => {
  const { offset, limit } = req.query as { offset: string, limit: string };
  try {
    const result = await pool.request()
      .input('Offset', offset)
      .input('Limit', limit)
      .execute('GetPaginatedProducts');
    res.status(200).json(result.recordset);
  } catch (error) {
    const err = error as Error;
    res.status(500).send(err.message);
  }
};

export const filterProductsByPrice = async (req: Request, res: Response) => {
  const { minPrice, maxPrice } = req.query as ProductFilterParams;
  try {
    const result = await pool.request()
      .input('MinPrice', minPrice)
      .input('MaxPrice', maxPrice)
      .execute('FilterProductsByPrice');
    res.status(200).json(result.recordset);
  } catch (error) {
    const err = error as Error;
    res.status(500).send(err.message);
  }
};
