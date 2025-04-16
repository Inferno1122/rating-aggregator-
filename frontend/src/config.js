export const addonConfig = {
    version: '1.0.1',
    name: '🎯 Ratings Aggregator',
    description: 'Aggregated ratings from IMDb, TMDb, Metacritic, Common Sense, CringeMDB and more.',
    backendUrl: import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:61262'
};

export default addonConfig;