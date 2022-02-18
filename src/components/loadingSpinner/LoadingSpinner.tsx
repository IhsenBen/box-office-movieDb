import * as React from 'react';

import './loadingspinner.css';

export default function LoadingSpinner(props: any) {
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
}
