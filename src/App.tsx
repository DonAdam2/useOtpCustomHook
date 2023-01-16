import { Routes, Route } from 'react-router-dom';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './ts/generic/ErrorBoundaryFallback';
//routes
import { routes } from '@/ts/routing/routingConstants/RoutesConfig';
//containers
import Header from '@/ts/containers/header/Header';

const App = () => (
  <ErrorBoundary
    FallbackComponent={ErrorBoundaryFallback}
    onReset={() => {
      //Reset the state of your app so the error doesn't happen again
      console.log('Try again clicked');
    }}
  >
    <div className="container">
      <Header />
      <Routes>
        {routes.map((el, i) => (
          <Route key={i} path={el.path} element={el.element} />
        ))}
      </Routes>
    </div>
  </ErrorBoundary>
);

export default App;
