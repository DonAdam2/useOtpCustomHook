import { ChangeEvent, useMemo } from 'react';
//components
import Input from '@/ts/components/shared/input/Input';
//interfaces
import { InputElementTypes } from '@/ts/interfaces/components/shared/InputInterface';
import { OtpVerificationFormInterface } from '@/ts/interfaces/containers/OtpVerificationFormInterface';
//form config
import { otpVerificationFormConfig } from '@/ts/formsConfig/OtpVerificationFormConfig';

const OtpVerificationForm = ({
  isDisplayChannelSelection,
  isDisplayProceedWithoutOtp,
  isDisplayInnerButton,
  mobileNumber,
  email,
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
}: OtpVerificationFormInterface) => {
  const { channelConfig, proceedWithoutOtpConfig, otpInputConfig } = otpVerificationFormConfig;

  const selectedChannelTarget = useMemo(() => {
    switch (channel) {
      case 'mobile':
        return mobileNumber;
      case 'email':
        return email;
      default:
        return '';
    }
  }, [channel, email, mobileNumber]);

  const channelHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setChannel(value);
  };

  const proceedWithoutOtpHandler = () => {
    setProceedWithoutOtp((prev) => !prev);
  };

  const otpInputHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setOtpValue(value);
  };

  const dontSendOtp = () => {
    console.log('proceed without otp');
  };

  const renderProceedWithoutOtpInput = () => (
    <>
      {isDisplayProceedWithoutOtp && (
        <Input
          elementType={proceedWithoutOtpConfig.elementType as InputElementTypes}
          elementConfig={proceedWithoutOtpConfig.elementConfig}
          changed={proceedWithoutOtpHandler}
          value={proceedWithoutOtp}
          label={proceedWithoutOtpConfig.label}
        />
      )}
    </>
  );

  const renderOtpVerificationTab = () => (
    <div>
      <h3>OTP Verification</h3>
      {isDisplayChannelSelection && (
        <Input
          elementType={channelConfig.elementType as InputElementTypes}
          elementConfig={channelConfig.elementConfig}
          value={channel}
          changed={channelHandler}
          label={channelConfig.label}
        />
      )}
      {(channel === 'mobile' || channel === 'email') && (
        <p>
          <i className="fas fa-info-circle" />
          OTP will be sent to {selectedChannelTarget}
        </p>
      )}
      {renderProceedWithoutOtpInput()}
      {isDisplayInnerButton && (
        <button
          disabled={isInteractingWithBackend || (isDisplayChannelSelection && !channel)}
          onClick={sendOtpHandler}
        >
          Send OTP
        </button>
      )}
    </div>
  );

  const renderVerifyOtpTab = () => (
    <div>
      <h3>OTP Verification</h3>
      <div className="d-flex">
        <span>
          <i className="fas fa-check-circle" /> OTP sent to{' '}
          {channel === 'mobile' ? mobileNumber : email}
        </span>
        <button onClick={resendOtpHandler}>Resend OTP</button>
        {isDisplayChannelSelection && <button onClick={changeOtpChannel}>Change Channel</button>}
      </div>
      <Input
        elementType={otpInputConfig.elementType as InputElementTypes}
        elementConfig={otpInputConfig.elementConfig}
        value={otpValue}
        changed={otpInputHandler}
        label={otpInputConfig.label}
      />
      {renderProceedWithoutOtpInput()}
      {isDisplayInnerButton && (
        <button disabled={isInteractingWithBackend || !otpValue} onClick={verifyOtpHandler}>
          Verify
        </button>
      )}
    </div>
  );

  const renderFormContent = () => {
    if (isVerifiedSuccessfully) {
      return <div>verified</div>;
    } else if (isVerifiedSuccessfully === false) {
      return <div>Verification failed</div>;
    } else {
      if (proceedWithoutOtp) {
        return (
          <>
            {renderProceedWithoutOtpInput()}
            {isDisplayInnerButton && <button onClick={dontSendOtp}>Proceed</button>}
          </>
        );
      } else if (isSentOtp) {
        return renderVerifyOtpTab();
      } else {
        return renderOtpVerificationTab();
      }
    }
  };

  return <>{renderFormContent()}</>;
};

export default OtpVerificationForm;
