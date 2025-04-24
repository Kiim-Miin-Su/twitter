let users = [
    {
        id: '1',
        user_id: "apple",
        password: '1111',
        name: '김사과',
        email: 'apple@apple.com',
        url: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
        id: '2',
        user_id: "banana",
        password: '2222',
        name: '반하나',
        email: 'banana@banana.com',
        url: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        id: '3',
        user_id: "orange",
        password: '3333',
        name: '오렌지',
        email: 'orange@orange.com',
        url: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
        id: '4',
        user_id: "berry",
        password: '4444',
        name: '배애리',
        email: 'orange@orange.com',
        url: 'https://randomuser.me/api/portraits/women/52.jpg'
    },
    {
        id: '5',
        user_id: "melon",
        password: '5555',
        name: '이메론',
        email: 'orange@orange.com',
        url: 'https://randomuser.me/api/portraits/men/29.jpg'
    }
]

// 회원가입

// 로그인
export async function log_in(input_id, input_pw) {
    if (!input_id || !input_pw) {
        console.log("아이디와 비밀번호를 입력해주세요.");
        return null;
    }
    const user = users.find((user) => user.user_id === input_id && user.password === input_pw);
    if (user) {
        return user;
    } else {
        return null;
    }
}
export async function sign_up(input_id, input_pw, name, email) {
    if (!input_id || !input_pw || !name || !email) {
        console.log("아이디, 비밀번호, 이름, 이메일을 입력해주세요.");
        return null;
    }
    const user = users.find((user) => user.user_id === input_id);
    if (user) {
        console.log("이미 존재하는 아이디입니다.");
        return null;
    } else {
        const new_user = {
            id: Date.now().toString(),
            user_id: input_id,
            password: input_pw,
            name: name,
            email: email,
        }
        users = [...users, new_user];
        console.log("회원가입이 완료되었습니다.");
        return new_user;
    }
}