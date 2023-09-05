import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate('/andarbech');
  }, [navigate]);

  return null;
};

export default PageNotFound;