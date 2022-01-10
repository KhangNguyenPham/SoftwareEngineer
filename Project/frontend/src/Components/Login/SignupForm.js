import React from "react";

export default function SignupForm(props) {
    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action={props.action} className="sign-up-form">
                        <h2 className="title">Đăng Ký</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Tên Đăng Nhập" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Mật Khẩu" />
                        </div>
                        <input type="submit" className="btn" value="Đăng Ký" />
                        <p className="social-text">Đăng Nhập Bằng Các Nền Tảng</p>
                        <div className="social-media">
                            <a href={props.socialMediaLink} className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>

                        </div>
                    </form>
                    <div className="panels-container">
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>Bạn Đã Có Tài Khoản?</h3>
                                <p>Thế còn ngại ngần gì, đăng nhập ngay và luôn!</p>
                                <button className="btn transparent" id="sign-in-btn">
                                    Sign in
                                </button>
                            </div>
                            <img src={props.registerImage} className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}