export const testCatch = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log('resolve');
      resolve();
    }, 500);

    setTimeout(() => {
      console.log('reject');
      reject('reject');
    }, 200);

  })
  .catch((error) => {
    console.log('catch', error);
    Promise.reject('promise reject catch');
  })
  .then((data) => {
    console.log('then after catch ', data);
  }, (error) => {
    console.log('then error ', error);
  })
}

testCatch();
