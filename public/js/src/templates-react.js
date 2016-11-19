import React from 'react';
import ReactDOM from 'react-dom';

import LoginDialog from '../../../server/react-views/partials/login.jsx';
import SignupDialog from '../../../server/react-views/partials/signup.jsx';
import ForgotPasswordDialog from '../../../server/react-views/partials/forgot.jsx';
import ResetPasswordDialog from '../../../server/react-views/partials/reset.jsx';
import ChangePasswordDialog from '../../../server/react-views/partials/changePassword.jsx';
import AddViolationDialog from '../../../server/react-views/partials/addViolation.jsx';
import AddCategoryDialog from '../../../server/react-views/partials/addCategory.jsx';
import SuccessDialog from '../../../server/react-views/partials/success.jsx';
import PleaseSignupDialog from '../../../server/react-views/partials/pleaseSignup.jsx';
import Loading from '../../../server/react-views/partials/loading.jsx';

function render(reactClass, model, domElement) {
	var temp = document.createElement('div');
	ReactDOM.render(React.createElement(reactClass, model), temp);
	domElement.parentNode.replaceChild(temp.childNodes[0], domElement);
}

module.exports = {
	loading: function(domElement) {
		var temp = document.createElement('div');
		ReactDOM.render(React.createElement(Loading), temp);
		domElement.appendChild(temp.childNodes[0]);
	},
	login: function(domElement, model) {
		render(LoginDialog, model, domElement);
	},
	signup: function(domElement, model) {
		render(SignupDialog, model, domElement);
	},
	forgot: function(domElement, model) {
		render(ForgotPasswordDialog, model, domElement);
	},
	reset: function(domElement, model) {
		render(ResetPasswordDialog, model, domElement);
	},
	changePassword: function(domElement, model) {
		render(ChangePasswordDialog, model, domElement);
	},
	addViolation: function(domElement, model) {
		render(AddViolationDialog, model, domElement);
	},
	addCategory: function(domElement, model) {
		render(AddCategoryDialog, model, domElement);
	},
	success: function(domElement, model) {
		render(SuccessDialog, model, domElement);
	},
	pleaseSignup: function(domElement, model) {
		render(PleaseSignupDialog, model, domElement);
	}
};