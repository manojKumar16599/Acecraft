import React from 'react';
import { Button, Form, Input } from 'antd';

import NotesContent from './NotesContents';
const { TextArea } = Input;

const NotesComment = () => {

    return (
        <div className='notes_comments_wrapper'>
            <NotesContent />
            <div className='comment-section'>
                <div className='leave-cmt grey-txt'>0 Comment</div>
                <div>
                    <div className='grey-txt'>Leave a Comment</div>
                    <Form
                        name="comments_form"
                    >
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Enter a valid email',
                                },
                            ]}
                        >
                            <Input placeholder='Name' />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required field',
                                },
                            ]}
                        >
                            <Input placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="message"
                            label="Message"
                            rules={[
                                {
                                    required: true,
                                    message: 'Required field',
                                },
                            ]}
                        >
                            <TextArea rows={4} placeholder="Your comment" />
                        </Form.Item>
                        <Button
                            type='primary'
                            htmlType='submit'
                            className='mt-3'
                        >
                            Post Comment
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
};

export default NotesComment;