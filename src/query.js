
/**
 * Fetch Mocked Data
 *
 * @param { number } userId
 * @return { data }
 */
export async function getUserData(userId) {
    try {
        const response = await fetch(`${process.env.PUBLIC_URL}/user/${userId}/user.json`)
        const {data} = await response.json()
        return data
    } catch(err) {
        return err
    }
}

export async function getActivitiesData(userId) {
    const response = await fetch(`${process.env.PUBLIC_URL}/user/${userId}/activity.json`)
    const {data} = await response.json()
    return data
}

export async function getSessionData(userId) {
    const response = await fetch(`${process.env.PUBLIC_URL}/user/${userId}/average-sessions.json`)
    const {data} = await response.json()
    return data
}

export async function getPerformanceData(userId) {
    const response = await fetch(`${process.env.PUBLIC_URL}/user/${userId}/performance.json`)
    const {data} = await response.json()
    return data
}

/**
 * Fetch API Data
 *
 * @param { number } userId
 * @return { data }
 */
// export async function getUserData(userId) {
//     const response = await fetch(`http://localhost:3000/user/${userId}`)
//     const {data} = await response.json()
//     return data
// }

// export async function getActivitiesData(userId) {
//     const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
//     const {data} = await response.json()
//     return data
// }

// export async function getSessionData(userId) {
//     const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`)
//     const {data} = await response.json()
//     return data
// }

// export async function getPerformanceData(userId) {
//     const response = await fetch(`http://localhost:3000/user/${userId}/performance`)
//     const {data} = await response.json()
//     return data
// }