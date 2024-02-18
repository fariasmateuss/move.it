import { trpc } from 'utils/api';

export function useChallengeCompletedMutation() {
  const utils = trpc.useUtils();

  return trpc.user.completedChallenge.useMutation({
    async onMutate({ data }) {
      await utils.user.getMe.cancel();

      const previousData = await utils.user.getMe.ensureData();
      if (previousData) {
        utils.user.getMe.setData(undefined, {
          ...previousData,
          ...data,
        });
      }

      return { previousData };
    },
    onError: (_err, _newData, context) => {
      if (context?.previousData) {
        utils.user.getMe.setData(undefined, context.previousData);
      }
    },
  });
}
