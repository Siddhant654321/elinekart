import './Shipping.css';
import ProgressContainer from './ProgressContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from "../slices/cartSlice";
import { useState } from 'react';
import { toast } from 'react-toastify';

const Shipping = () => {
  const shippingAddress = useSelector((state) => state?.cart?.shippingAddress);

  const [address, setAddress] = useState(shippingAddress?.address || "");
  const [city, setCity] = useState(shippingAddress?.city || "");
  const [postalCode, setPostalCode] = useState(
    shippingAddress?.postalCode || "",
  );
  const [country, setCountry] = useState(shippingAddress?.country || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = () => {
    if (address.length < 3) {
      toast.error("Address needs to be atleast 3 characters long.");
      return false;
    }
    if (city.length < 2) {
      toast.error("City needs to be atleast 2 characters long.");
      return false;
    }
    if (postalCode.length < 3 || isNaN(postalCode)) {
      toast.error("Postal code must be at least 3 digits long and numeric.");
      return false;
    }
    if (country.length < 2) {
      toast.error("Country needs to be atleast 2 characters long.");
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(saveShippingAddress({ address, city, postalCode, country }));
      navigate("/payment");
    }
  };

  return (
    <main>
      <ProgressContainer />
      <form className='shipping_form' onSubmit={submitHandler}>
        <input type='text' placeholder='Street Address' value={address} onChange={(e) => setAddress(e.target.value)} />
        <input type='text' placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
        <input type='text' placeholder='Postal Code' value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        <input type='text' placeholder='Country' value={country} onChange={(e) => setCountry(e.target.value)} />
        <button type='submit' className='continue_btn'>CONTINUE</button>
      </form>
    </main>
  )
}
export default Shipping