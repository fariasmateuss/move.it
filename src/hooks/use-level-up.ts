import { trpc } from 'utils/api';

export function useLevelUpMutation() {
  const utils = trpc.useUtils();

  return trpc.user.levelUp.useMutation({
    async onMutate({ data }) {
      await utils.user.getMe.cancel();

      const previousData = utils.user.getMe.getData();
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
