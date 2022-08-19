import { ChangeEventHandler, FC, KeyboardEventHandler, useState } from 'react';

import { Icon } from '@simple-chat/components';

import * as S from './message-input.style';

export const MessageInput: FC = () => {
  const [message, setMessage] = useState('');

  const isMessageValid = message.trim().length > 0;

  const sendMessage = () => {
    if (!isMessageValid) return;
    console.log('TODO: send message');
    setMessage('');
  };

  const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const newValue = e.target.value;
    setMessage(newValue);
  };

  return (
    <S.Wrapper>
      <S.GrowContainer data-replicated-value={message}>
        <S.TextArea
          placeholder='Type here...'
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={message}
          rows={1}
        />
      </S.GrowContainer>
      <S.IconButton
        isAccent={isMessageValid}
        disabled={!isMessageValid}
        onClick={sendMessage}
      >
        <Icon.SendPlaneFill />
      </S.IconButton>
    </S.Wrapper>
  );
};