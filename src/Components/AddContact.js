
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { contactSelector, addContactThunk } from "../Redux/Reducers/contactReducer";


const AddContact = () => {

    const dispatch = useDispatch();

    const [isChanged,setIsChanged]=useState(false);

    const {contactList} = useSelector(contactSelector);

    const inputStructure = {
        id:`${contactList.length}`,
        name:'',
        email:'',
        phone:'',
        address:{
            suite:'',
            city:'',
            zipcode:''
        }
    };

    const [formData,setFormData]  = useState(inputStructure);
    const [address,setAddress] = useState(inputStructure.address);

    
    const handleSubmit = (e) => {

        if(!isChanged){
            // show notification and return
            toast.error('Nothing to add in the list');
            return;
        }

        if(formData.name === '' || formData.phone === ''){
            toast.error('Name / Phone cannot be empty');
            return;
        }

        e.preventDefault();

        // calling add contact function
        dispatch(addContactThunk(formData));
        toast.success('A new contact is Added !!');
        setIsChanged(false);
    }


    const handleChange = (e) => {
        if(!isChanged){
            setIsChanged(true);
        }

        const {name,value} = e.target;
        
        setFormData({
            ...formData,
            [name]:value,
        });
    }


    const handleAddressChange = (e) => {
        if(!isChanged){
            setIsChanged(true);
        }

        const {name,value} = e.target;
        
        setAddress({
            ...address,
            [name]:value,
        })

        setFormData({
            ...formData,
            address:{
                ...address,
                [name]:value
            }
        });
    }


    const handleReset = (e) => {
        e.preventDefault();

        // set to false so that user cannot submit the empty data
        setIsChanged(false);

        // setting data to initial Structure
        setFormData(inputStructure);

        // setting address to initial value
        setAddress(inputStructure.address);

        toast.success('Entered data is removed !!');
    }


    return(
    <>
        {/* container div with padding and border radius */}
        <div className="w-full bg-[#313866] p-2 rounded">
            {/* form to get user's data */}
            <form>
                {/* table to create the layout of input fields */}
                <table className="border-separate border-spacing-2">

                    <tbody>
                        {/* first row containing name section */}
                        <tr>
                            <td>
                                {/* label */}
                                <label for="name" className="text-white font-semibold">
                                    Name :
                                </label>
                            </td>
                            <td>
                                {/* input box */}
                                <input type="text"
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                                    onChange={handleChange}
                                    required />
                            </td>
                        </tr>

                        {/* second row for phone number */}
                        <tr>
                            <td>
                                {/* label */}
                                <label for="phone" className="text-white font-semibold">
                                    Phone :
                                </label>
                            </td>
                            <td>
                                {/* input box */}
                                <input type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                                    required />
                            </td>
                        </tr>

                        {/* third row for Email */}
                        <tr>
                            <td>
                                {/* label */}
                                <label for="email" className="text-white font-semibold">
                                    Email :
                                </label>
                            </td>
                            <td>
                                {/* input box */}
                                <input type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                                    onChange={handleChange}
                                    required />
                            </td>
                        </tr>

                        {/* for Address heading */}
                        <tr>
                            <td colSpan={2}>
                                {/* label */}
                                <label className="text-white font-semibold">
                                    Address
                                </label>
                            </td>
                        </tr>


                        {/*  row for house no. in Address */}
                        <tr>
                            <td>
                                {/* label */}
                                <label for="suite" className="text-white font-semibold">
                                    H. No. :
                                </label>
                            </td>
                            <td>
                                {/* input box */}
                                <input type="text"
                                    id="suite"
                                    name="suite"
                                    value={address.suite}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee]"
                                    onChange={handleAddressChange}
                                    required />
                            </td>
                        </tr>

                        {/* row for city name in address */}
                        <tr>
                            {/* label */}
                            <td>
                                <label for="city" className="text-white font-semibold">
                                    City :
                                </label>
                            </td>
                            <td>
                                {/* input box */}
                                <input type="text"
                                    id="city"
                                    name="city"
                                    value={address.city}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                                    onChange={handleAddressChange}
                                    required />
                            </td>
                        </tr>

                        {/* row for zipcode inside the address */}
                        <tr>
                            <td>
                                {/* label */}
                                <label for="zipcode" className="text-white font-semibold">
                                    ZipCode :
                                </label>
                            </td>
                            <td>
                                {/* input box */}
                                <input type="text"
                                    id="zipcode"
                                    name="zipcode"
                                    value={address.zipcode}
                                    className="rounded-sm focus:outline-none focus:border-2 focus:border-[#6a88ee] "
                                    onChange={handleAddressChange}
                                    required />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>

        {/* button for submit the form  */}
        <button className="float-left bg-[#75C2F6] 
                        text-white py-[2px] px-[3px] mt-1 rounded 
                        shadow-md" 
                onClick={handleSubmit}>
            Add Contact
        </button>

        {/* button for reset the entered values  */}
        <button className="float-right bg-red-500 
                        text-white p-[2px] mt-1 rounded 
                        shadow-md" 
                onClick={handleReset}>
            Reset
        </button>
    </>
    )
}

export default AddContact;