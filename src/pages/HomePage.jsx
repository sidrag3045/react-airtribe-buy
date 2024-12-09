import React from 'react';
import Products from '../pages/Products';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Box, Button, Grid, Image, Text } from '@mantine/core';

const HomePage = () => {
  const navigate = useNavigate();

  const handleViewAllProducts = () => {
    navigate('/products'); // Assuming you have a Products page
  };

  return (
    <Container size="md" mt="xl">
      {/* Header Section */}
      <Title align="center" order={1} mb="lg">
        Welcome to Airtribe Buy App
      </Title>

      {/* Hero Banner Section */}
      <Box
        style={{
          height: "250px",
          width: "100%",
          backgroundImage: "url('https://via.placeholder.com/1200x250')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "8px",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "24px",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        }}
      >
        Black Friday Sale: Up to 40% Off!
      </Box>

      {/* Featured Products Section */}
      <Title align="left" order={2} mb="sm">
        Featured Products
      </Title>
      <Grid gutter="md">
        <Grid.Col span={4}>
          <Box>
            <Image src="https://via.placeholder.com/200" alt="Product 1" radius="md" />
            <Text align="center" mt="xs">Product 1</Text>
            <Text align="center" weight="bold">₹1000</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box>
            <Image src="https://via.placeholder.com/200" alt="Product 2" radius="md" />
            <Text align="center" mt="xs">Product 2</Text>
            <Text align="center" weight="bold">₹1500</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box>
            <Image src="https://via.placeholder.com/200" alt="Product 3" radius="md" />
            <Text align="center" mt="xs">Product 3</Text>
            <Text align="center" weight="bold">₹1200</Text>
          </Box>
        </Grid.Col>
      </Grid>
      <Button
        fullWidth
        mt="md"
        size="md"
        onClick={handleViewAllProducts}
        color="blue"
      >
        View All Products
      </Button>

      {/* Categories Section */}
      <Title align="left" order={2} mt="xl" mb="sm">
        Shop by Categories
      </Title>
      <Grid gutter="md">
        <Grid.Col span={4}>
          <Box
            style={{
              height: "150px",
              backgroundColor: "#ffeb3b",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <Text weight="bold">Electronics</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box
            style={{
              height: "150px",
              backgroundColor: "#4caf50",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <Text weight="bold">Fashion</Text>
          </Box>
        </Grid.Col>
        <Grid.Col span={4}>
          <Box
            style={{
              height: "150px",
              backgroundColor: "#2196f3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px",
            }}
          >
            <Text weight="bold">Home & Furniture</Text>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default HomePage;
