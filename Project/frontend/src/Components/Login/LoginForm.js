import React from "react";

export default function LoginForm(props) {
    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action={props.action} className="sign-in-form">
                        <h2 className="title">Đăng Nhập</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Tên Đăng Nhập" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Mật Khẩu" />
                        </div>
                        <input type="submit" value="Đăng Nhập" className="btn solid" />
                        <p className="social-text">Đăng Nhập Bằng Các Nền Tảng</p>
                        <div className="social-media">
                            <a href={props.socialMediaLink} className="social-icon">
                                <i className="fab fa-google"></i>
                            </a>
                        </div>
                    </form>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Bạn Là Khách Hàng Mới</h3>
                                <p>Đừng ngại ngần đăng ký ngay. Luôn luôn có những voucher hấp dẫn chờ đợi các bạn!</p>
                                <button className="btn transparent" id="sign-up-btn">
                                    Đăng Ký
                                </button>
                            </div>
                            <img src={props.loginImage} className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}