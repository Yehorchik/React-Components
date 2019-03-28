import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
       <div className="ui container comments">
           <ApprovalCard>
                <CommentDetail author ="Sam" timeAgo="Today at 6:45pm" comment="Nice 1" img = {faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
                <CommentDetail author ="Alex" timeAgo="Yesterday at 7:45pm" comment="Nice 2" img = {faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
                <CommentDetail author ="Jane" timeAgo="Today at 6:45am" comment="Nice 3" img = {faker.image.avatar()}/>
           </ApprovalCard>
           <ApprovalCard>
                <CommentDetail author ="David" timeAgo="Today at 4:21pm" comment="Nice 4" img = {faker.image.avatar()}/>
           </ApprovalCard>
       </div>
    );
}

ReactDOM.render(<App /> , document.querySelector('#root'));