import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Heading, Link, Container, VStack } from '@chakra-ui/react';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Flex minHeight="100vh" direction="column">
        <Box as="header" bg="blue.500" color="white" p={4}>
          <Container maxW="container.xl">
            <Flex alignItems="center" justifyContent="space-between">
              <Heading as="h1" size="lg">Kurwhy Shop</Heading>
              <Flex as="nav">
                <Link as={RouterLink} to="/" mr={4}>Beranda</Link>
                <Link as={RouterLink} to="/products" mr={4}>Produk</Link>
                <Link as={RouterLink} to="/about">Tentang Kami</Link>
              </Flex>
            </Flex>
          </Container>
        </Box>

        <Container maxW="container.xl" flex="1" py={8}>
          <Flex>
            <VStack flex={1} mr={8} align="stretch" spacing={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </VStack>
            <Box width="300px" position="sticky" top="20px" alignSelf="flex-start">
              <Cart />
            </Box>
          </Flex>
        </Container>

        <Box as="footer" bg="blue.500" color="white" p={4} mt="auto">
          <Container maxW="container.xl" textAlign="center">
            <p>&copy; 2023 Kurwhy Shop. Hak Cipta Dilindungi.</p>
          </Container>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;