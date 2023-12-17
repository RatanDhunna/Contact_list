
import { useEffect } from "react";

import { contactThunk } from "../Redux/Reducers/contactReducer";

import { useDispatch} from "react-redux";

import MoreInfoSection from "./MoreInfoSection";
import List from "./List";


const ContactList = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(contactThunk());
    },[]);


    return(
        <div className="w-full flex h-full overflow-hidden">

            {/* list component to show the list */}
            <List />

            {/* to render the more info section on page */}
            <MoreInfoSection />
        </div>
    )
}

export default ContactList;