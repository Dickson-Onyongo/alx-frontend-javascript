import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo]).then((value) => {
    const results = [];
    value.forEach((element) => {
      if (element.status === 'fulfilled') {
        results.push({ status: element.status, value: element.value });
      } else {
        results.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return results;
  });
}
