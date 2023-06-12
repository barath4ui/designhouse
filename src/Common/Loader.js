import React from 'react';
import loader from '../images/Common/loader.jpg';

const Loader = () => {
  return (
    <div class="page-loader">
              <div class="spinner"></div>
              <div class="txt">
                  <img src={loader} alt="" title="" />
              </div>
        </div>
  )
}

export default Loader