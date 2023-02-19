import { useNavigate } from 'react-router-dom';
import './CSS/Homepage.css';

function Homepage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className="hbody">
      <div className="homepage-container">
        <h1 id="homepage-title"><i>NIBM</i> Student Portal</h1>
        <button className="homepage-button" onClick={handleClick}>Click Here</button>
      </div>
    </div>
  );
}

export default Homepage;
