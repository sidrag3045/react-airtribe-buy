import React, { useEffect, useState } from 'react';
import { Grid, Container, Pagination } from '@mantine/core';
import { fetchPaginatedProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import { notifications } from "@mantine/notifications";

const Products = ({ onProductClick }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const productsPerPage = 10; // Total products per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPaginatedProducts(page, productsPerPage);
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <Container>
      <Grid gutter= "lg">
        {products.map((product) => (
          <Grid.Col span={4} key={product.id} style={{ padding: '1rem' }}>
          {/* 3 products per row because span=4 (12/4 = 3 columns) */}
          <ProductCard product={product} onClick={onProductClick} />
        </Grid.Col>
        ))}
      </Grid>
      <Pagination
        total={Math.ceil(20 / productsPerPage)} // Total pages (20 products example)
        page={page}
        onChange={(newPage) => setPage(newPage)}
        mt="md"
      />
    </Container>
  );
};

export default Products;
