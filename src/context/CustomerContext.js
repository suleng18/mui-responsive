import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch('http://localhost:3001/customers');
    //   const responseJSON = await response.json();

    //   setCustomers(responseJSON);
    // };
    // fetchData();

    async function getInfoCustomers() {
      try {
        const response = await axios.get('http://localhost:3001/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getInfoCustomers();
  }, []);

  const createCustomer = async ({ name, details, gender, rating }) => {
    const response = await axios.post('http://localhost:3001/customers', {
      name,
      details,
      gender,
      rating,
    });
    const data = response.data;
    setCustomers([...customers, data]);
  };

  const deleteCustomer = async (id) => {
    await axios.delete(`http://localhost:3001/customers/${id}`);
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <CustomerContext.Provider value={{ customers, deleteCustomer, createCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContext;
