import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import globalStyles from 'styles/commonStyles';
import { useStyles as formStyles } from 'styles/FormLayoutStyles';
import { AuthContext } from 'contexts/AuthContext';
import { API_BASE_URL } from 'utils/makeReq';
import axios from 'axios';
import { useGaTracker } from 'hooks';
import { toast } from 'react-toastify';

const ConfirmMail = () => {
  useGaTracker();
  const { isLoggedIn, signInUser } = useContext(AuthContext);
  const formClasses = formStyles();

  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useParams();

  const [loading, setLoading] = useState(true);

  let redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${API_BASE_URL}/auth/confirmMail/${token}`
        );

        toast.success('Account Activated Successfully!');
        signInUser(res.data.token, res.data.user);
        navigate('/');
      } catch (err) {
        console.log('err', err);
        toast.error('The Activation Link is either expired or invalid');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      // console.log(`userr`, isLoggedIn);
      navigate(redirect || '/');
    }
  }, [isLoggedIn, navigate, redirect]);

  return (
    <div className={formClasses.mainContainer}>
      {loading && <div className='loader'></div>}
    </div>
  );
};

export default ConfirmMail;
