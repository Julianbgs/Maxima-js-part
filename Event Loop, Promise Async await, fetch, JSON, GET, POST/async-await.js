// // Пример 1
// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data fetched");
//         }, 4000);
//     });
// }
//
// async function fetchAndLogData() {
//     try {
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
//
// fetchAndLogData();
// console.log("Fetching data...");


//Пример 2: Последовательный запрос
//
// В этом примере мы будем делать два последовательных запроса к веб-серверу, используя async/await.

async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
//
// async function fetchPostsByUser(userId) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//         const posts = await response.json();
//         return posts;
//     } catch (error) {
//         console.error("Error:", error);
//         throw error;
//     }
// }
//
// async function fetchUserAndPosts(userId) {
//     try {
//         const user = await fetchUserData(userId);
//         const posts = await fetchPostsByUser(userId);
//         return { user: user, posts: posts };
//     } catch (error) {
//         console.error("Error:", error);
//         throw error;
//     }
// }
//
// fetchUserAndPosts(1)
//     .then(result => {
//         console.log("User:", result.user);
//         console.log("Posts:", result.posts);
//     })
//     .catch(error => {
//         console.error("Overall Error:", error);
//     });

// Пример 2: Одновременные запросы
//
// В этом примере мы будем делать несколько параллельных запросов и ждать, пока все они завершатся.

// async function fetchMultipleUsers(userIds) {
//     const promises = userIds.map(userId => fetchUserData(userId));
//     const users = await Promise.all(promises);
//     return users;
// }
//
//
// const userIds = [1, 2, 3];
// fetchMultipleUsers(userIds)
//     .then(users => {
//         console.log("Users:", users);
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });

//Пример 3: Отложенный вызов
//
// В этом примере мы будем использовать async/await для отложенного вызова функции после выполнения асинхронных операций.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function performDelayedAction() {
    console.log("Action will be performed after 2 seconds...");
    await delay(2000);
    console.log("Delayed action performed!");
}

console.log('IM HERE');

performDelayedAction();
