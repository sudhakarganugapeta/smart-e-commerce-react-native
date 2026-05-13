import { collection, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../config/firebaseConfig";
import { store } from "../store/store";

export const getProductsData = async () => {
    try {
        const response = await getDocs(collection(db, "Products"));
      const list =[];
        response.forEach((doc) => {
            list.push(doc.data());
        });
        return list;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

export const fetchUserOrders = async () => {
    try {
        // const userId = store&&store.getState().userSlice.userData.uid;
        const userIdFromFirebase =auth.currentUser?.uid;
        const ordersRef = collection(db, "users", userIdFromFirebase, "orders");
        const ordersSnapshot = await getDocs(ordersRef);
        const orders = [];
        ordersSnapshot.forEach((doc) => {
            orders.push({ id: doc.id, ...doc.data() });
        });
        return orders;
    } catch (error) {
        console.error("Error fetching user orders:", error);
        return [];
    }
};