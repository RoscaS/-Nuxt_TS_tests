import { PollsMutation } from '~/store/polls/types';

export const mutations: PollsMutation = {
  setPolls: (state, polls) => {
    state.polls = polls;
  },

  vote: (state, vote) => {
    state.votes.push(vote);

    state.polls
      .map((poll) => poll.choices)
      .reduce((prev, curr) => prev.concat(curr), [])
      .filter((choice) => choice.id === vote.choiceId)
      .forEach((choice) => (choice.count += 1));
  }
};

export default mutations;
