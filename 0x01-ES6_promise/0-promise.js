export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('Operation successful');
    } else {
      reject(console.error('Operation failed'));
    }
  });
}
