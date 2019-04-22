import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 4209021fca5a8ee64a4ad4aea524b5ffcf9d16fab825a0772f90d1038b525c1c'
    }
});

