```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->![hello]/hello.jpeg

2. Answer the following with reason:

- `user == newUser;` // true
- `user === newUser;`// true
- `user.name === newUser.name;`//false
- `user.name == newUser.name;`//false
- `user.sibling == newUser.sibling;`//false
- `user.sibling === newUser.sibling;`//false
- `user.sibling == allBrothers;`//false
- `user.sibling === allBrothers;`//false
- `brothersCopy === allBrothers;`//false
- `brothersCopy == allBrothers;`//false
- `brothersCopy == user.sibling;`//false
- `brothersCopy === user.sibling;`//false
- `brothersCopy[0] === user.sibling[0];`false
- `brothersCopy[1] === user.sibling[1];`//false
- `user.sibling[1] === newUser.sibling[1];`//false
