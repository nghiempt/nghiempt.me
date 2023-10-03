'use client';

import React, { useEffect, useState } from 'react';
import HModal from '../HModal';
import { Button } from '@douyinfe/semi-ui';

export const HomePage = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    setShowModal(true)
  }, []);

  useEffect(() => {}, [showModal]);

  return (
    <div className="flex flex-col h-screen justify-center items-center mx-auto max-w-screen-xl items-center justify-center">
      <HModal isVisible={showModal} onClose={handleShowModal} />
      <Button
        className="p-8 !bg-[#ff471a] !text-white transition duration-300 ease-in-out hover:opacity-60 text-[17px] rounded-xl"
        onClick={handleShowModal}
      >
        {"I'am Nghiem, Hello you !"}
      </Button>
    </div>
  );
};
