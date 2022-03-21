import { useState } from 'react';
//containers
import VerifyOtpModal from '@/ts/containers/verifyOtpModal/VerifyOtpModal';

const ModalExamplePage = () => {
  const [isModalActive, setIsModalActive] = useState(false);

  const closeModalHandler = () => {
    setIsModalActive(false);
  };

  const openModalHandler = () => {
    setIsModalActive(true);
  };

  return (
    <div>
      <button onClick={openModalHandler}>verify otp</button>
      <VerifyOtpModal isModalActive={isModalActive} closeModalHandler={closeModalHandler} />
    </div>
  );
};

export default ModalExamplePage;
