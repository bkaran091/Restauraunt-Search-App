import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses', //route Url
    headers: {
        Authorization: 'Bearer FMqWx22rcshFbwnVtMgbCq6EmfMlUlfWJNr75ynrPcy3qJJYMbDXMRZOtauUpMQ1iomDw8biVgkcQYjxiuEw6mjfOs7qzQ2wjoJ54cvV-wVdYLe8SyiCh4TKP96rXnYx'
    }
});