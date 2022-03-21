//styles
import classes from './OtpVerificationPage.scss';
//cusom hooks
import useOtp from '@/ts/customHooks/useOtp';
//containers
import OtpVerificationForm from '@/ts/containers/otpVerificationForm/OtpVerificationForm';

const OtpVerificationPage = () => {
  const {
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
  } = useOtp({});

  return (
    <div className={classes.otpVerificationWrapper}>
      <OtpVerificationForm
        isDisplayChannelSelection
        isDisplayProceedWithoutOtp
        isDisplayInnerButton
        mobileNumber={97234234}
        email="test@test.com"
        channel={channel}
        setChannel={setChannel}
        otpValue={otpValue}
        setOtpValue={setOtpValue}
        proceedWithoutOtp={proceedWithoutOtp}
        setProceedWithoutOtp={setProceedWithoutOtp}
        sendOtpHandler={sendOtpHandler}
        resendOtpHandler={resendOtpHandler}
        verifyOtpHandler={verifyOtpHandler}
        isVerifiedSuccessfully={isVerifiedSuccessfully}
        isSentOtp={isSentOtp}
        isInteractingWithBackend={isInteractingWithBackend}
        changeOtpChannel={changeOtpChannel}
      />
    </div>
  );
};

export default OtpVerificationPage;
