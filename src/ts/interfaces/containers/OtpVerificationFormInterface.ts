import { Dispatch, SetStateAction } from 'react';

export interface OtpVerificationFormInterface {
  isDisplayChannelSelection?: boolean;
  isDisplayProceedWithoutOtp?: boolean;
  isDisplayInnerButton?: boolean;
  mobileNumber?: number;
  email?: string;
  channel: string;
  setChannel: Dispatch<SetStateAction<string>>;
  otpValue: string;
  setOtpValue: Dispatch<SetStateAction<string>>;
  proceedWithoutOtp: boolean;
  setProceedWithoutOtp: Dispatch<SetStateAction<boolean>>;
  sendOtpHandler?: () => void;
  resendOtpHandler: () => void;
  verifyOtpHandler?: () => void;
  isVerifiedSuccessfully: boolean | undefined;
  isSentOtp: boolean;
  isInteractingWithBackend: boolean;
  changeOtpChannel: () => void;
}
