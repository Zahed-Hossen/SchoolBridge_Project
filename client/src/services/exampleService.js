// client/src/services/exampleService.js
import axios from 'axios';

export const fetchExampleData = async () => {
    try {
        const response = await axios.get('/api/example');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
