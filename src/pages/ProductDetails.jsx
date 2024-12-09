import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../utils/api';
import { Container, Card, Image, Text, Button, Title } from '@mantine/core';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Image src={product.image} alt={product.title} height={50} width = {50} />
      <Text weight={500}>{product.title}</Text>
      <Text size="sm" color="black">
        {product.description}
      </Text>
      <Text size="lg" weight="bold">${product.price}</Text>
      <Button variant="gradient" fullWidth mt="md" radius="md" gradient={{ from: "blue", to: "green" }}>
        Buy Now
      </Button>
      <Button variant="gradient" fullWidth mt="md" radius="md" gradient={{ from: "purple", to: "yellow" }}>
        Add to Cart
      </Button>
    </Card>
    </Container>
  );
};

export default ProductDetails;

