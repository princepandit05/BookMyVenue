import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";  
import { BASE_URL } from "../../data";

const OTPInput = ({ otp, setOtp }) => {
  const inputRefs = useRef([]);


  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value.length === 1 && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyUp = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => inputRefs.current[index] = el}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyUp={(e) => handleKeyUp(e, index)}
          style={{
            width: '40px',
            height: '40px',
            fontSize: '20px',
            textAlign: 'center',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
        />
      ))}
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();  
  const [number, setnumber] = useState("");
  const [errorMsg, seterrorMsg] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']); 
  const [islogin,setislogin] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phonepattern = /^[0-9]{10}$/;

    if (!phonepattern.test(number)) {
      seterrorMsg("Please enter a valid 10 digit number");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/user/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobileNo: number,
        }),
      });

      const data = await response.json();
      if (data.code === 200) {
        setShowOtp(true);
        window.alert(`Your OTP: ${data.data.otp}`);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await fetch(`${BASE_URL}/user/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobileNo: number,
          otp: otp.join(''), // Convert array to string
        }),
      });

      const data = await response.json();
      if (data.code === 200) {
        window.alert("OTP Verified Successfully!");
        navigate("/"); 
        setislogin(ture)
      } else {
        window.alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handlenumberChange = (e) => {
    setnumber(e.target.value);
    seterrorMsg("");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h3 className="image-text ">Welcome To </h3>
        <br />
        <h1>Book<span className="my">my</span>Venue</h1>
      </div>
      <div className="login-page">
        <h1>SIGN IN</h1>
        <input
          className="input-type"
          type="text"
          placeholder="Number"
          value={number}
          onChange={handlenumberChange}
        />
        {errorMsg && <p className="error">{errorMsg}</p>}
        <button onClick={handleSubmit} className="btn">
          Request OTP
        </button>

        {showOtp && (
          <div>
            <p>OTP sent to {number}, please enter the OTP</p>
            <OTPInput otp={otp} setOtp={setOtp} />
            <button onClick={verifyOtp} className="btn">Verify OTP</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
