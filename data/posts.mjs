let posts = [
    {
        id: "1",
        name: "김사과",
        user_id: "apple",
        text: "Node.js 배우는 중인데 Express 진짜 편하다!",
        created_at: Date.now().toString(),
        url: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
        id: "2",
        name: "반하나",
        user_id: "banana",
        text: "오늘의 커피 :커피: + 코딩 = 최고의 조합!",
        created_at: Date.now().toString(),
        url: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: "3",
        name: "오렌지",
        user_id: "orange",
        text: "Elasticsearch 연동 완료! 실시간 검색 API 짜릿해",
        created_at: Date.now().toString(),
        url: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        id: "4",
        name: "배애리",
        user_id: "berry",
        text: "JavaScript 비동기 너무 어렵다... Promises, async/await, 뭐가 뭔지",
        created_at: Date.now().toString(),
        url: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    {
        id: "5",
        name: "이메론",
        user_id: "melon",
        text: "새 프로젝트 시작! Express + MongoDB + EJS 조합 좋아요",
        created_at: Date.now().toString(),
        url: "https://randomuser.me/api/portraits/men/29.jpg",
    },
];

// return all posts
export async function get_all() {
    return posts;
}

// return post by user_id
export async function get_all_by_user_id(user_id) {
    return posts.filter((post) => post.user_id === user_id); // filter (배열로 반환)
}
// return post by post_id
export async function get_all_by_post_id(post_id) {
    return posts.find((post) => post.id === post_id); // find (첫 요소를 반환)
}

export async function create_post(user_id, name, text) {
    const post = {
        id: Date.now().toString(),
        user_id: user_id,
        name: name,
        text: text,
        created_at: Date.now().toString(),
    }
    posts = [post, ...posts];
    return posts;
}

// update post by post_id
export async function update_post(post_id, text) {
    const post = posts.find((post) => post.id === post_id);
    if (post) {
        post.text = text;
        return post;
    }
    return post;
}

// delete post by post_id
export async function delete_post(post_id) {
    posts = posts.filter((post) => post.id !== post_id)
}