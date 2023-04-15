const googleDatabase = [
    'cats.com',
    'dogs.com',
    'rabbits.com',
    'rats.com'
];

const googleSearch = (searchInput, db) => {
    const matched = db.filter(website => {
        return website.includes(searchInput)});
    return matched.length > 3
        ? matched.slice(0, 3)
        : matched;
};

// console.log(googleSearch('com', googleDatabase));

module.exports = googleSearch;