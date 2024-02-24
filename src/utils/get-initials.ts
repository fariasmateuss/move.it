export const getInitials = (fullName: string): string => {
  const names = fullName.split(' ');

  if (names.length < 2) {
    return names[0].charAt(0).toUpperCase();
  }

  return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();
};
