"use client";

const mockData = {
  listing: [
    { id: "1", name: "Milk", price: 1.5, quantity: 0 },
    { id: "2", name: "Cheese", price: 4.0, quantity: 0 },
    { id: "3", name: "Yogurt", price: 2.0, quantity: 0 },
    { id: "4", name: "Butter", price: 3.5, quantity: 0 },
    { id: "5", name: "Apple", price: 0.8, quantity: 0 },
    { id: "6", name: "Banana", price: 0.6, quantity: 0 },
    { id: "7", name: "Orange", price: 1.2, quantity: 0 },
    { id: "8", name: "Strawberry", price: 2.5, quantity: 0 },
    { id: "9", name: "Lemon", price: 0.5, quantity: 0 },
    { id: "10", name: "Blueberry", price: 3.0, quantity: 0 },
    { id: "11", name: "Grapes", price: 2.8, quantity: 0 },
    { id: "12", name: "Peach", price: 1.7, quantity: 0 },
    { id: "13", name: "Milk Powder", price: 5.0, quantity: 0 },
    { id: "14", name: "Cottage Cheese", price: 3.2, quantity: 0 },
    { id: "15", name: "Ice Cream", price: 4.5, quantity: 0 },
    { id: "16", name: "Mango", price: 1.5, quantity: 0 },
    { id: "17", name: "Pineapple", price: 2.2, quantity: 0 },
    { id: "18", name: "Avocado", price: 2.0, quantity: 0 },
    { id: "19", name: "Kiwi", price: 1.8, quantity: 0 },
    { id: "20", name: "Carrot", price: 0.9, quantity: 0 },
  ],
  search: [
    { id: "2", name: "Cheese", price: 4.0, quantity: 0 },
    { id: "4", name: "Butter", price: 3.5, quantity: 0 },
    { id: "5", name: "Apple", price: 0.8, quantity: 0 },
    { id: "6", name: "Banana", price: 0.6, quantity: 0 },
    { id: "10", name: "Blueberry", price: 3.0, quantity: 0 },
    { id: "12", name: "Peach", price: 1.7, quantity: 0 },
    { id: "14", name: "Cottage Cheese", price: 3.2, quantity: 0 },
    { id: "16", name: "Mango", price: 1.5, quantity: 0 },
    { id: "19", name: "Kiwi", price: 1.8, quantity: 0 },
  ],
};

export const fetchProducts = async (page: "listing" | "search") => {
  return JSON.parse(JSON.stringify(mockData[page]));
};
