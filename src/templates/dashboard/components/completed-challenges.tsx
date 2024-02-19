import { useChallengeState } from 'contexts/challenge/challenge-context';

export function CompletedChallenges() {
  const { challengesCompleted } = useChallengeState();

  return (
    <div className="my-16 flex items-center justify-between border-b border-gray-300 py-4 font-medium">
      <span>Challenges completed</span>
      <span className="text-2xl">{challengesCompleted}</span>
    </div>
  );
}
