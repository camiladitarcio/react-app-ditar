const fetchConfig = {
    method: "GET",
    headers: {
        key:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNhbWlsYUBjYW1pbGEuY29tIiwiaWF0IjoxNTY0NjA1MTU2LCJleHAiOjE1NjQ2OTE1NTZ9.L3cICLqbbNVzABaAJHhJEKTgXE8NAfrAu0_BHaBN0Ng',
    },
    mode: 'cors',
}

const get = async () => {
    try {
        return await fetch(apiUrl, fetchConfig
        ).then(res => res.json())
    } catch (error) {
        throw error;
    }
}

export { get };