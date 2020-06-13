import { PollsState } from '~/store/polls/types';

export const initState = (): PollsState => ({
  polls: [],
  votes: [],
});

export default initState;
