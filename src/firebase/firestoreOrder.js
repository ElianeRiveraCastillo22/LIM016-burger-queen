
import {
  getDoc,
  doc,
} from "firebase/firestore";
import db  from "./config";

export const getDataID = (id, nameColeccion) => {
  const docRef = doc(db, nameColeccion, id);
  return getDoc(docRef);
};



// export const saveOrdeFS = (client, dishes, total, state) => {
//   return addDoc(collection(db, "order"), {
//     client,
//     dishes,
//     total,
//     state,
//   });
// };

// export const GetOrdersFs = async () => {
//   const orders = collection(db, "order");
//   const showOrders = await getDocs(orders)
//   return console.log(showOrders.docs);;
// }; GetOrdersFs();



// export const getOrder = (id) => {
//   const order = doc(db, "order", id)
//   return getDoc(order);
// };

// export const onGetOrders = (callback) => {
//   const order = collection(db, "order");
//   return onSnapshot(order, callback);
// };

// export const deleteOrder = (id) => {
//   const order = doc(db, "order", id)
//   return deleteDoc(order);
// };

// export const updatePost = (id, valor) => {
//   const realUpdate = doc(db, "post", id);
//   return updateDoc(realUpdate, {
//     state: valor,
//   });
// };