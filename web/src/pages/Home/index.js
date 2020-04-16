import React, { useState } from "react";
import { connect } from "react-redux";

import api from "../../services/api";
import Product from '../../components/Product';

const Home = ({token}) => {
  const [products, setProducts] = useState([]);
  const [listed, setListed] = useState(false);

  async function listProducts() {

    const response = await api.get(`/products?token=${token}`);

    const data = await response.data;
    
    if(data.status === 200) {
      setProducts(data.products);
    }
  }

  if(token && !listed) {
    setListed(true);
    listProducts();
  }

  return (
    <main className="m-auto container">

      <h1 className="text-center">List Products</h1>
      {!token ? (
        <div className="alert alert-danger text-center">
          You must log in before
        </div>
      ) : (<ul className="list-group text-center">
        {products.map(product => (
            <li className="list-group-item w-75 bg-danger d-flex m-auto" key={product.id}>
              <Product
                id={product.id}
                name={product.name}
                description={product.description}
                quantity={product.quantity}
                type={product.type}
              />
            </li>
        ))}
      </ul>)}
    </main>
  );
};

const mapStateToProps = state => ({
  token: state.token
});

export default connect(
  mapStateToProps
)(Home);
