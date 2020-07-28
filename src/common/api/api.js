import * as axios from "axios";

import {authorized_fetch} from "./utils";

// Сделать со статическими классами и вынести в отдельные файлы

export const categoriesAPI = {
    getCategories() {
        return authorized_fetch.get("http://localhost:3000/Categories")
    },
    getCategoryById(id) {
        return authorized_fetch.get(`http://localhost:3000/Categories/${id}`);
    },
    updateCategoryById(name, id, description, products) {
        return authorized_fetch.put(`http://localhost:3000/Categories/update`, {
            name: name,
            id: id,
            description: description,
            products: products
        });
    },
    deleteCategory(id) {
        return authorized_fetch.delete(`http://localhost:3000/Categories/${id}`)
    },
    addCategory() {
        return authorized_fetch.post(`http://localhost:3000/Categories/add`, {name: "Введите название"})

    }
};

export const productsAPI = {
    getProducts(currentPage, pageSize) {
        return authorized_fetch.get(`http://localhost:3000/Products?pageNo=${currentPage}&size=${pageSize}`)
    },
    getProductById(id) {
        return authorized_fetch.get(`http://localhost:3000/Products/${id}`)
    },
    updateProductById(id, name, description, price, color, wireless, backlight, producer, category) {
        return authorized_fetch.put(`http://localhost:3000/Products/update`, {
            id: id, name: name, description: description, price: price,
            color: color, wireless: wireless, backlight: backlight,
            producer: producer, category: category
        }).then(response => {
            return response;
        })
    },
    deleteProduct(id) {
        return authorized_fetch.delete(`http://localhost:3000/Products/${id}`)
    },
    addProduct() {
        return authorized_fetch.post(`http://localhost:3000/Products/add`, {name: "Введите название"})
    }
};

export const usersAPI = {
    getUsers() {
        return authorized_fetch.get("http://localhost:3000/Users")
    },
    getUserById(id) {
        return authorized_fetch.get(`http://localhost:3000/Users/5eb7e8fd9f2d4624ac8103ef`)
    }
};

export const authAPI = {
    register(user) {
        return fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
            .then(res => res.json())
    },

    login(email, password) {
        return fetch('http://localhost:3000/auth/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
            .then(res => res.json())
            .then(res => {
                if (res.success)
                    localStorage.setItem('token', res.token)
                return res
            })
    },

    logout() {
        localStorage.removeItem('token')
    }
};

export const ordersAPI = {
    getOrders() {
        return authorized_fetch.get("http://localhost:3000/Orders")
    }
};