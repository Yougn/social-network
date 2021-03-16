import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import { required, maxLengthCreator } from '../../../utils/valiodators/validators';
import { Textarea } from '../../common/formControls/formControls';


const maxLength10 = maxLengthCreator(10);
let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={Textarea} placeholder={'Post message'}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

const MyPosts = React.memo((props) => {

    let postsElements = props.posts.map(p => < Post message={p.message} likesCount={p.likesCount} key={p.id} />);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={classes.posts}>
            New posts
            {postsElements}
        </div>
    </div>;
});

export default MyPosts;
