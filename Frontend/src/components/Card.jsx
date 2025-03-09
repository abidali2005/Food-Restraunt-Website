import React, { useState } from 'react';
import { useDispatchCart } from '../components/ContextReducer';

export default function Card(props) {
  let options = props.options;
  let priceOptions = Object.keys(options);
  const dispatch = useDispatchCart();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[0]);

  const handleAddToCart = () => {
    if (dispatch && typeof dispatch === 'function') {
      dispatch({
        type: "ADD",
        id: props.item._id,
        name: props.foodName,
        qty: qty,
        size: size,
        price: options[size] * qty,
        img: props.img
      });
    } else {
      console.error("Dispatch is not a function");
    }
  }

  const handleUpdateCart = () => {
    if (dispatch && typeof dispatch === 'function') {
      dispatch({
        type: "UPDATE",
        id: props.item._id,
        qty: qty,
        price: options[size] * qty
      });
    } else {
      console.error("Dispatch is not a function");
    }
  }

  return (
    <div>
      <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
        <img src={props.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <div className='container w-100 p-0' style={{ height: "38px" }}>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" value={qty} onChange={(e) => setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className="m-2 h-100 w-20 bg-success text-black rounded" value={size} onChange={(e) => setSize(e.target.value)}>
              {
                priceOptions.map((data) => (
                  <option key={data} value={data}>{data}</option>
                ))
              }
            </select>
            <div className='d-inline ms-2 h-100 w-20 fs-5'>
              ₹{options[size] * qty}/-
            </div>
          </div>
          <hr></hr>
          <button className="btn btn-success justify-center ms-2" onClick={handleAddToCart}>Add to Cart</button>
          <button className="btn btn-warning justify-center ms-2" onClick={handleUpdateCart}>Update Cart</button>
        </div>
      </div>
    </div>
  );
}
