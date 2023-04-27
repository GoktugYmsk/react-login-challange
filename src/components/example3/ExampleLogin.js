import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExampleLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        // burada API çağrısı yaparak token alınabilir
        // burada örnek olarak sabit bir token kullanıyorum
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem("token", token); // token'ı localStorage'a kaydet
        navigate("/"); // anasayfaya yönlendir
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" || password === "1234") {
            handleLogin();
        } else {
            setError("Kullanıcı adı veya şifre boş bırakılamaz!");
        }
    };

    return (
        <div>
            <h2>Giriş Yap</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Kullanıcı Adı:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                    Şifre:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <br />
                {error && <div className="error">{error}</div>}
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    );
}

export default ExampleLogin;
