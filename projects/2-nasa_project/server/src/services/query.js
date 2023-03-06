const DEFAULT_PAGE_LIMIT = 0;

function getPagination(query) {
    const page = Math.abs(query.page) || 1;
    const limit = Math.abs(query.limit) || 50;
    const skip = (page - 1) * limit;

    return {
        skip,
        limit,
    }
}