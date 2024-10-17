import React, { useState,useEffect } from 'react';
import AddProductForm from './AddProductForm';  // Component สำหรับเพิ่มสินค้า
import ProductCard from './ProductCard';  // Component สำหรับแสดงสินค้า
import Pagination from './Pagination';  // Component สำหรับแบ่งหน้า
import '../css/ProductsList.css';

const ProductsList = () => {
    const [productList, setProductList] = useState([]); // เก็บรายการสินค้า
    const [currentPage, setCurrentPage] = useState(1); // หน้าที่กำลังแสดงอยู่
    const itemsPerPage = 4; // จำนวนสินค้าที่แสดงต่อหน้า

    // เพิ่มสินค้าใหม่
    const addProduct = (product) => {
        setProductList([...productList, product]);
    };

    // คำนวณจำนวนหน้าทั้งหมด
    const totalPages = Math.ceil(productList.length / itemsPerPage);

    // สินค้าที่จะแสดงในหน้านั้นๆ
    const currentItems = productList.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // ฟังก์ชันเปลี่ยนหน้า
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const sampleProducts = [
            {
                name: 'Sample Product 1',
                price: '1',
                description: 'Description for Sample Product 1',
                imageUrl: 'https://via.placeholder.com/150'
            },
            {
                name: 'Sample Product 2',
                price: '2',
                description: 'Description for Sample Product 2',
                imageUrl: 'https://via.placeholder.com/150'
            },
            {
                name: 'Sample Product 3',
                price: '3',
                description: 'Description for Sample Product 3',
                imageUrl: 'https://via.placeholder.com/150'
            },
            {
                name: 'Sample Product 4',
                price: '4',
                description: 'Description for Sample Product 4',
                imageUrl: 'https://via.placeholder.com/150'
            },
            {
                name: 'Sample Product 5',
                price: '59.99',
                description: 'Description for Sample Product 5',
                imageUrl: 'https://via.placeholder.com/150'
            }            
        ];
        setProductList(sampleProducts); 
    }, []); 

    return (
        <div className="container">

            <div className="form-container">
                <AddProductForm onAddProduct={addProduct} />
            </div>


            <div className="products-grid">
                {currentItems.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
                      {productList.length > itemsPerPage && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
            </div>

           
      
        </div>
    );
};

export default ProductsList;
