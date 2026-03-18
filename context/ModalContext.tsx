'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';
import Modal from '@/components/Modal';

interface ModalContent {
  title: string;
  content: React.ReactNode;
  imageUrl?: string;
}

interface ModalContextType {
  openModal: (content: ModalContent) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={modalContent.title} imageUrl={modalContent.imageUrl}>
          {modalContent.content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
}; 