import { useChallengeState } from 'contexts/challenge/challenge-context';

import { Progress } from 'components/ui/progress';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useChallengeState();

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className="flex items-center">
      <span>0 xp </span>
      <div className="relative mx-6 flex-grow">
        <Progress
          value={percentToNextLevel}
          max={experienceToNextLevel}
          className="h-1 rounded-sm bg-gray-line text-green-500"
        />

        <span
          style={{ left: `${percentToNextLevel}%` }}
          className="absolute top-3 -translate-x-2/4"
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp </span>
    </header>
  );
}
