import {NewUser, User, UserType} from "./user.model";

const users: User[] = [
  {id: '1', name: 'Admin', type: UserType.Admin, version: 0},
  {id: '2', name: 'User 1', type: UserType.User, version: 0},
  {id: '3', name: 'User 2', type: UserType.User, version: 0},
  {id: '4', name: 'User 3', type: UserType.User, version: 0},
  {id: '5', name: 'Admin 2', type: UserType.Admin, version: 0},
  {id: '6', name: 'User 4', type: UserType.User, version: 0},
];
let index = 0;
let newUsersIndex = 0;

export function getUsers(): User[] {
  let version = index++;
  users.forEach(user => user.version = version);
  // make a deep copy
  return (JSON.parse(JSON.stringify(users)) as User[]);
}

export function addUser(user: NewUser): User {
  const newUser = {
    ...user,
    id: 'new ' + newUsersIndex++,
    version: 0
  };
  users.push(newUser);
  return newUser;
}

export function updateUser(user: User): User {
  const index = users.findIndex(u => u.id === user.id);
  if (index === -1) {
    return addUser(user);
  }

  const newUser = {
    ...user,
    version: Math.ceil(Math.random() * 1000)
  };

  users.splice(index, 1, newUser);

  return newUser;
}
