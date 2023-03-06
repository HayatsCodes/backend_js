function getPagination(query) {
    const page = Math.abs(query.page);
    const limit = Math.abs(query.limit);
    const skip = 

    return {
        skip,
        limit,
    }
}