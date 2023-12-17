

import { useDispatch, useSelector } from "react-redux";

import { contactSelector, setShowAddContact } from "../Redux/Reducers/contactReducer";



const Navbar = () => {
   
    const dispatch = useDispatch();

    const {showAddContact} = useSelector(contactSelector);


    return(
        <div className="bg-[#1D5D9B] h-[50px] flex justify-between 
                        md:justify-center items-center px-1 sticky 
                        left-0 top-0 right-0">

            {/* heading inside the navbar */}
            <h1 className="text-white text-lg">
                Contact List
            </h1>

            {/* add contact button */}
            {/* visible only on smaller screen  */}
            <button className="bg-green-300 rounded p-[2px] md:hidden" 
                    onClick={() => dispatch(setShowAddContact())}>

                {/* set the value of button on condition */}
                {showAddContact ? "Cancel"
                                    : "Add Contact" }

            </button>
            
        </div>
    )
}

export default Navbar;