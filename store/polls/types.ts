import { Poll, Vote, ChoiceVote } from '~/lib/polls/models';
import { ActionTree, ActionContext, MutationTree, GetterTree } from 'vuex';
import { RootState } from '../types'


export interface PollsState {
  polls: Poll[],
  votes: Vote[];
}

export type PollActionContext = ActionContext<PollsState, RootState>;

export interface PollsActions extends ActionTree<PollsState, RootState>{
  load: (ctx: PollActionContext) => void;
  vote: (ctx: PollActionContext, choiceVote: ChoiceVote) => void;
}

export interface PollsMutation extends MutationTree<PollsState>{
  setPolls: (state: PollsState, polls: Poll[]) => void;
  vote: (state: PollsState, vote: Vote) => void;
}

export type PollsGetters = GetterTree<PollsState, RootState>;
