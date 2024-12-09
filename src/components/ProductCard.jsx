import React from 'react';
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { product, onAddToCart } = props;

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={product.image} alt={product.title} height={160} />
      </Card.Section>

      <Group>
        <Text weight={500}>{product.title}</Text>
        <Badge color="pink" variant="light">
          {product.category}
        </Badge>
      </Group>

      <Text size="sm" lineClamp={2}>
        {product.description}
      </Text>

      <Text size="lg" weight={700} mt="md">
        ${product.price}
      </Text>

      <Button
        variant="outline"
        fullWidth
        mt="md"
        radius="md"
        component={Link}
        color='blue'
        to={`/products/${product.id}`}
      >
        View Details
      </Button>

      <Button
        onClick={() => onAddToCart(product)}
        variant="gradient"
        gradient={{ from: "purple", to: "yellow" }}
        fullWidth
        mt="md"
        radius="md"
      >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;

