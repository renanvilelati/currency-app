import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-brl-exchange.actionlabs.com.br/api/1.0'
})

