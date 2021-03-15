import profileReducer, { addPostActionCreator,  deletePost } from "./profile-reducer";

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you ?', likesCount: 5 },
        { id: 2, message: 'It is my first post', likesCount: 10 }
    ]
};

it('length of post should be incremented', () => {
    // 1 test data
    let action = addPostActionCreator("yooo");

    // 2 action
    let newState = profileReducer(state, action);

    // 3 expectation
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    // 1 test data
    let action = addPostActionCreator("yooo");

    // 2 action
    let newState = profileReducer(state, action);

    // 3 expectation
    expect(newState.posts[2].message).toBe("yooo");
});

it('after deleting length of messages should be decrement', () => {
    // 1 test data
    let action = deletePost(1);

    // 2 action
    let newState = profileReducer(state, action);

    // 3 expectation
    expect(newState.posts.length).toBe(1);
});

it('after deleting length shouldnot be decrement if id is incorrect', () => {
    // 1 test data
    let action = deletePost(1000);

    // 2 action
    let newState = profileReducer(state, action);

    // 3 expectation
    expect(newState.posts.length).toBe(2);
});

