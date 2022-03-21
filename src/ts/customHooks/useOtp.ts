import { useCallback, useState } from 'react';

interface UseOtpInterface {
  defaultChannel?: 'mobile' | 'email';
}

const useOtp = ({ defaultChannel }: UseOtpInterface) => {
  const [channel, setChannel] = useState(defaultChannel ? defaultChannel : ''),
    [otpValue, setOtpValue] = useState(''),
    [proceedWithoutOtp, setProceedWithoutOtp] = useState(false),
    [isVerifiedSuccessfully, setIsVerifiedSuccessfully] = useState<boolean | undefined>(undefined),
    [isSentOtp, setIsSentOtp] = useState(false),
    [isInteractingWithBackend, setIsInteractingWithBackend] = useState(false);

  const sendOtpHandler = useCallback(() => {
    setIsInteractingWithBackend(true);
    setTimeout(() => {
      console.log('send OTP');
      setIsSentOtp(true);
      setIsInteractingWithBackend(false);
    }, 1000);
  }, []);

  const resendOtpHandler = useCallback(() => {
    setIsInteractingWithBackend(true);
    setTimeout(() => {
      console.log('resend OTP handler');
      setIsInteractingWithBackend(false);
    }, 1000);
  }, []);

  const verifyOtpHandler = useCallback(() => {
    setIsInteractingWithBackend(true);
    setTimeout(() => {
      console.log('verify OTP', otpValue);
      setIsVerifiedSuccessfully(true);
      setIsInteractingWithBackend(false);
    }, 1000);
  }, [otpValue]);

  const changeOtpChannel = useCallback(() => {
    setIsSentOtp(false);
    setOtpValue('');
    setChannel(defaultChannel ? defaultChannel : '');
  }, [defaultChannel]);

  return {
    channel,
    setChannel,
    otpValue,
    setOtpValue,
    proceedWithoutOtp,
    setProceedWithoutOtp,
    sendOtpHandler,
    resendOtpHandler,
    verifyOtpHandler,
    isVerifiedSuccessfully,
    isSentOtp,
    isInteractingWithBackend,
    changeOtpChannel,
  };
};

export default useOtp;
