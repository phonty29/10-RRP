import {createContext, useContext, useState} from 'react';


const GroceryBudContext = createContext(null);


const GroceryBudProvider = ({children}) => {
	const [showAlert, setAlertVisibility] = useState(false);
	const makeAlertVisible = () => {
		setAlertVisibility(true);
	}
	const makeAlertHidden = () => {
		setAlertVisibility(false);
	}

	return (
		<GroceryBudContext.Provider value={{showAlert, makeAlertVisible, makeAlertHidden}}>
			{children}
		</GroceryBudContext.Provider>
	);
};

export default GroceryBudProvider;

export const useGroceryBudContext = () => {
	return useContext(GroceryBudContext);
};