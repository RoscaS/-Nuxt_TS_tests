<template>
  <div>
    <h3>{{ poll.topic }}</h3>
    <div
      v-for="choice in poll.choices"
      :key="choice.id"
      @click="selectedChoice(choice)"
    >
      <span>
        <span v-if="choice.id === selectedChoiceId">[SELECTED]</span>
        <span>Select {{ choice.text }} (count: {{ choice.count }})</span>
      </span>
    </div>
    <div v-if="selectedChoiceId > 0">
      <textarea v-model="comment"></textarea>
      <button @click="voteChoice()">Vote !</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Poll, Choice, ChoiceVote } from '~/lib/polls/models';
import { pollsModule } from '@/store/polls/const';

@Component({})
export default class PollDetail extends Vue {
  private comment: string = '';
  private selectedChoiceId: number = -1;

  @Prop({ type: Object }) public poll!: Poll;
  @pollsModule.Action('vote') private vote !: (choiceVote: ChoiceVote) => void;

  public selectedChoice(choice: Choice): void {
    this.selectedChoiceId = choice.id;
  }

  public voteChoice(): void {
    this.vote({
      choiceId: this.selectedChoiceId,
      comment: this.comment.length > 0 ? this.comment : undefined
    });
    
    this.selectedChoiceId = -1;
    this.comment = '';
  }
}
</script>

<style></style>
