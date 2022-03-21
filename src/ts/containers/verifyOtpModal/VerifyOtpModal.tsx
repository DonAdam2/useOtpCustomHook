//custom hooks
import useOtp from '@/ts/customHooks/useOtp';
//interfaces
import { VerifyOtpModalInterface } from '@/ts/interfaces/containers/VerifyOtpModalInterface';
//components
import Modal from '@/ts/components/shared/Modal';
//containers
import OtpVerificationForm from '@/ts/containers/otpVerificationForm/OtpVerificationForm';

const VerifyOtpModal = ({ isModalActive, closeModalHandler }: VerifyOtpModalInterface) => {
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

  const dontSendOtp = () => {
    console.log('proceed without otp');
  };

  const submitHandler = () => {
    if (proceedWithoutOtp) {
      dontSendOtp();
    } else if (isSentOtp) {
      verifyOtpHandler();
    } else {
      sendOtpHandler();
    }
  };

  const footerBtns = [
    {
      click: closeModalHandler,
      label: 'cancel',
    },
    {
      click: submitHandler,
      label: proceedWithoutOtp ? 'Proceed' : isSentOtp ? 'Verify' : 'send otp',
      disabled: proceedWithoutOtp
        ? false
        : isSentOtp
        ? isInteractingWithBackend || !otpValue
        : isInteractingWithBackend || !channel,
    },
  ];

  return (
    <Modal show={isModalActive} footerBtns={footerBtns} headerCloseHandler={closeModalHandler}>
      <OtpVerificationForm
        isDisplayChannelSelection
        isDisplayProceedWithoutOtp
        isDisplayInnerButton={false}
        mobileNumber={97234234}
        email="test@test.com"
        channel={channel}
        setChannel={setChannel}
        otpValue={otpValue}
        setOtpValue={setOtpValue}
        proceedWithoutOtp={proceedWithoutOtp}
        setProceedWithoutOtp={setProceedWithoutOtp}
        resendOtpHandler={resendOtpHandler}
        isVerifiedSuccessfully={isVerifiedSuccessfully}
        isSentOtp={isSentOtp}
        isInteractingWithBackend={isInteractingWithBackend}
        changeOtpChannel={changeOtpChannel}
      />
    </Modal>
  );
};

export default VerifyOtpModal;
