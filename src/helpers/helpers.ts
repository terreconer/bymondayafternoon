export const validateEmail = (email: string) => {
  const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  console.log(reg.test(email), 'EMAIL Validation');
  const isValid = reg.test(email);
  return isValid;
};

type UserData = Record<string, any>;

export const setUserData = async (userData: any, itemName: string, callback?: (data: boolean) => void): Promise<UserData> => {
  return new Promise<UserData>((resolve, reject) => {
    /**
     * Used to emulate waiting time and to show Loader
     */
    setTimeout(() => {
      try {
        localStorage.setItem(itemName, JSON.stringify(userData));
        if (callback) return callback(true);
        resolve(userData);
      } catch(error) {
        if (callback) callback(false);
        reject(error);
      }
    }, 5000)
  });
};
