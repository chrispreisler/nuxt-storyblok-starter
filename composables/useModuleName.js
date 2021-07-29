export const useModuleName = () => {
  const getModuleName = (prefix, name) =>
    prefix + name.substring(0, 1).toUpperCase() + name.substring(1);

  return {
    getModuleName
  };
};
