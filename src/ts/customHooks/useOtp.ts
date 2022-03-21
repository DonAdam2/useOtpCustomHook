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

  const resetOtpHandler = useCallback(() => {
    setChannel(defaultChannel ? defaultChannel : '');
    setOtpValue('');
    setProceedWithoutOtp(false);
    setIsVerifiedSuccessfully(undefined);
    setIsSentOtp(false);
    setIsInteractingWithBackend(false);
  }, [defaultChannel]);

  const sendOtpHandler = useCallback(() => {
    setIsInteractingWithBackend(true);
    //will be replaced with the actual API
    setTimeout(() => {
      console.log('send OTP');
      setIsSentOtp(true);
      setIsInteractingWithBackend(false);
    }, 1000);
  }, []);

  const resendOtpHandler = useCallback(() => {
    setIsInteractingWithBackend(true);
    //will be replaced with the actual API
    setTimeout(() => {
      console.log('resend OTP handler');
      setIsInteractingWithBackend(false);
    }, 1000);
  }, []);

  const verifyOtpHandler = useCallback(() => {
    setIsInteractingWithBackend(true);
    //will be replaced with the actual API
    setTimeout(() => {
      console.log('verify OTP', otpValue);
      setIsVerifiedSuccessfully(true);
      setIsInteractingWithBackend(false);
    }, 1000);
  }, [otpValue]);

  const changeOtpChannelHandler = useCallback(() => {
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
    isVerifiedSuccessfully,
    isSentOtp,
    isInteractingWithBackend,
    sendOtpHandler,
    resendOtpHandler,
    verifyOtpHandler,
    changeOtpChannelHandler,
    resetOtpHandler,
  };
};

export default useOtp;
