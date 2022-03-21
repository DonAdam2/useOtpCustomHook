//URLs
import { getHomePageUrl, getModalExamplePageUrl } from '@/ts/routing/routingConstants/AppUrls';
//pages
import OtpVerificationPage from '@/ts/containers/pages/otpVerificationPage/OtpVerificationPage';
import ModalExamplePage from '@/ts/containers/pages/modalExamplePage/ModalExamplePage';

export const routes = [
  { path: getHomePageUrl(), element: <OtpVerificationPage />, label: 'Home' },
  { path: getModalExamplePageUrl(), element: <ModalExamplePage />, label: 'Modal Example' },
];
