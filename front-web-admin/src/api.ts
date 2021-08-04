import axios from "axios";

const API_URL = 'https://fabiana-dsdelivery.herokuapp.com';

export function fetchOrders() {
    return axios.get(`${API_URL}/orders`)
}

export function fetchProducts() {
    return axios.get(`${API_URL}/products`)
}