import React from 'react';

import './Login.css';

class Login extends React.Component {

    render() {
        return (
            <div className="login_page">
                <div className="login_container">
                    <form id="login_form" action="" className="form-horizontal">
                        <h2 className="heading_a"><span className="heading_text">Log in</span></h2>
                        <div className="form-group">
                            <label htmlFor="login_username" className="col-sm-3 control-label">Username</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" id="login_username"
                                       autoComplete="off"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="login_password" className="col-sm-3 control-label">Password</label>
                            <div className="col-sm-9">
                                <input type="password" className="form-control" id="login_password"
                                       autoComplete="off"/>
                            </div>
                        </div>
                        <div className="form-group sepH_c">
                            <div className="col-sm-9 col-sm-offset-3">
                                <a ui-sref="auth.home" className="btn btn-sm btn-primary">Log in</a>
                            </div>
                        </div>
                        <div className="text_hr"><span>or use</span></div>
                        <div className="row">
                            <div className="col-xs-6">
                                <button className="btn btn-sm btn-default btn-block" type="button"><span
                                    className="el-icon-github"></span> GitHub
                                </button>
                            </div>
                            <div className="col-xs-6">
                                <button className="btn btn-sm btn-default btn-block" type="button"><span
                                    className="el-icon-twitter"></span> Twitter
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default Login;