import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('store.db');

export const initStore = () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS store (id INTEGER PRIMARY KEY NOT NULL, category TEXT NOT NULL, name TEXT NOT NULL, description TEXT NOT NULL, price REAL NOT NULL);",
            [],
            () => resolve(),
            (_, err) => reject(err)
            )
        })
    })

    return promise;
}

export const insertProduct = (category, name, description, price) => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO products (category, name, description, price) values (?, ?, ?, ?, ?);",
                [title, image, address, lat, lng],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
} 

export const fetchProducts = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "SELECT * FROM products;",
                [],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}

export const deleteProduct = (id) => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( tx => {
            console.log(id);
            tx.executeSql(
                "DELETE FROM products WHERE id = ?",
                [id],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}

//CART INIT

export const initCart= () => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( (tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS cart (id INTEGER PRIMARY KEY NOT NULL, category TEXT NOT NULL, name TEXT NOT NULL, description TEXT NOT NULL, price REAL NOT NULL);",
            [],
            () => resolve(),
            (_, err) => reject(err)
            )
        })
    })

    return promise;
}

export const insertCart = (category, name, description, price) => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO cart (category, name, description, price) values (?, ?, ?, ?, ?);",
                [title, image, address, lat, lng],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })

    return promise;
} 

export const fetchCart = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction( tx => {
            tx.executeSql(
                "SELECT * FROM cart;",
                [],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}

export const deleteCart = (id) => {
    const promise = new Promise( (resolve, reject) => {
        db.transaction( tx => {
            console.log(id);
            tx.executeSql(
                "DELETE FROM cart WHERE id = ?",
                [id],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise;
}