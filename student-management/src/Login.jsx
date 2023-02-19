import { useState } from 'react'
import Registration from './Registration';
import OtherDetails from './OtherDetails';
import CreditCardDetails from './CreditCardDetails';



function Login() {
  
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  let pageContent;
  switch (currentPage) {
    case 1:
      pageContent = <Registration nextPage={nextPage} />;
      break;
    case 2:
      pageContent = <CreditCardDetails nextPage={nextPage} prevPage={prevPage} />;
      break;
    case 3:
      pageContent = <OtherDetails prevPage={prevPage} />;
      break;
    default:
      pageContent = <Registration nextPage={nextPage} />;
      break;
  }

  return <div>{pageContent}</div>;
}

export default Login
