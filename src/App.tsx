import { Routes, Route, NavLink } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './ts/generic/ErrorBoundaryFallback';
//pages
import OtpVerificationPage from '@/ts/containers/pages/otpVerificationPage/OtpVerificationPage';
import ModalExamplePage from '@/ts/containers/pages/modalExamplePage/ModalExamplePage';

const App = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallback}
      onReset={() => {
        //Reset the state of your app so the error doesn't happen again
        console.log('Try again clicked');
      }}
    >
      <div className="container">
        <div className="d-flex">
          <NavLink to="/">Home</NavLink>
          <span style={{ flex: '1' }} />
          <NavLink to="/modal-example">Modal example</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<OtpVerificationPage />} />
          <Route path="/modal-example" element={<ModalExamplePage />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default hot(App);
