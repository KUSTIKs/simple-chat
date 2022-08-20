import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '@simple-chat/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
