import { useNavigate } from "react-router-dom";
import "../../styles/loginRequiredModal.css";

function LoginRequiredModal({ isOpen, onClose }) {

    const navigate = useNavigate();

    if (!isOpen) return null;

    return (

        <div className="modal-overlay">

            <div className="login-modal">

                <h2>🔒 Login Required</h2>

                <p>

                    Please login or register to continue.

                </p>

                <div className="modal-buttons">

                    <button
                        className="login-btn"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>

                    <button
                        className="register-btn"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>

                </div>

                <button
                    className="close-btn"
                    onClick={onClose}
                >
                    Close
                </button>

            </div>

        </div>

    );

}

export default LoginRequiredModal;