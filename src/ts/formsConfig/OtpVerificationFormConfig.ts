export const otpVerificationFormConfig = {
  channelConfig: {
    label: 'Select the channel on which OTP can be shared',
    elementType: 'radio-group',
    elementConfig: {
      name: 'otpChannel',
      options: [
        { value: 'mobile', displayValue: 'Mobile No' },
        { value: 'email', displayValue: 'Email' },
      ],
    },
  },
  proceedWithoutOtpConfig: {
    label: 'Proceed without OTP verification',
    elementType: 'checkbox',
    elementConfig: {
      id: 'proceedWithoutOtp',
    },
  },
  otpInputConfig: {
    label: 'Enter OTP',
    elementType: 'input',
    elementConfig: {
      type: 'text',
      id: 'otpInput',
    },
  },
};
