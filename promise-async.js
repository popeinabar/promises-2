const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'ABC Cookie' };

// Progression 1: create a function to get all the cookies
// Progression 2: using setTimeout() -- use 1000 units for time parameter

function getAllCookies() {
  setTimeout(() => {
    cookies.forEach((cookie) => {
      const li = document.createElement('li');
      li.innerText = cookie.name;
      document.body.append(li);
    }, 1000);
  });
}
//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookie(newCookie) {
  return new Promise((resolve, reject) => {
    // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
    setTimeout(() => {
      // Progression 5: handling errors and adding new cookie to the list
      if (newCookie.name == '') {
        reject('Invalid Cookie!');
      }
      cookies.push(newCookie);
      resolve();
    }, 2000);
  });
}
// Progression 4: adding two parameters and using setTimeout() - use 2000 units for time parameter

// Progression 5: handling errors and adding new cookie to the list

// Progression 7: creating a new async function

async function display(newcookie) {
  try {
    await createCookie(newcookie);
    getAllCookies();
  } catch (mess) {
    console.log(mess);
  }
}

// calling the new async function

display(newCookie);
