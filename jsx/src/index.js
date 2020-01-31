// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './commentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

// Create a React Component

const APP = () => {
	return (
		<div className="ui container comments"> 
		   <ApprovalCard>
		     <CommentDetail author="Hammad" timeAgo="Today at 4:55PM" content="Nice Blog Post!" avatar={faker.image.avatar()} />
		   </ApprovalCard>
		   <ApprovalCard>
		     <CommentDetail author="Hassan" timeAgo="Today at 5:03PM" content="I like the subject!" avatar={faker.image.avatar()} />
		   </ApprovalCard>
		   <ApprovalCard>
             <CommentDetail author="Behzad" timeAgo="Today at 5:05PM" content="I like the writting!" avatar={faker.image.avatar()} />
           </ApprovalCard>
		</div>
	);
}

// Take a React Component and show it on screen
ReactDOM.render(
	<APP />,
	document.querySelector('#root')
);