import { db } from '../services/firebase';

export const setName = (name) => {
    return {
        type: 'SET_NAME',
        payload: name
    }
}
export const addProduct = (prodObj) => {
    return function (dispatch) {
        return db.collection('products')
            .add(prodObj).then(snapshot => {
                // dispatch
                dispatch({
                    type: 'ADD_PRODUCT',
                    payload: prodObj
                });
            });
    };
}

export const fetchProduct = () => {
    return function (dispatch) {
        return db.collection('products').get()
            .then(snapshot => {
                const fproducts = [];
                snapshot.forEach(doc => {
                    const field = doc.data();
                    fproducts.push(field);
                });
                console.log(fproducts);
                // dispatch
                dispatch({
                    type: 'FETCH_PRODUCT',
                    payload: fproducts
                });
            }).catch(error => {
                console.log(error);
            });
    };
}

export const removeProduct = (id) => {
    return function (dispatch) {
        var query = db.collection('products').where('id', '==', id);
        query.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                doc.ref.delete();
            });
            // dispatch
            dispatch({
                type: 'REMOVE_PRODUCT',
                payload: id
            });
        });
    };
}

export const addFavorite = (id) => {
    return {
        type: 'ADD_FOVORITE',
        payload: id
    }
}

export const addCart = (id) => {
    return {
        type: 'ADD_CART',
        payload: id
    }
}