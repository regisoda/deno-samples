import { IUser } from "../models/user.ts";

let users: Array<IUser> = [{
  id: "1",
  name: "João",
  update_at: new Date("2020-06-08"),
}, {
  id: "2",
  name: "Maria",
  update_at: new Date("2020-06-09"),
}, {
  id: "3",
  name: "Pedro",
  update_at: new Date("2020-06-09"),
}];

const getUsers = ({ response }: { response: any }) => {
  response.body = users;
};

const getUser = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const user: IUser | undefined = users.find((user) => user.id === params.id);

  if (user) {
    response.status = 200;
    response.body = user;
  } else {
    response.status = 404;
    response.body = { message: "User not found." };
  }
};

const addUser = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  const user: IUser = body.value;

  user.update_at = new Date();

  users.push(user);

  response.body = { message: "OK" };
  response.status = 200;
};

const updateUser = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  let user: IUser | undefined = users.find((user) => user.id === params.id);

  if (user) {
    const body = await request.body();
    const updateUser: { name?: string; email?: string } = body.value;

    user = { ...user, ...updateUser, update_at: new Date() };
    users = [...users.filter((user) => user.id !== params.id), user];

    response.status = 200;
    response.body = user;
  } else {
    response.status = 404;
    response.body = { message: "User not found." };
  }
};

const deleteUser = (
  { params, response }: { params: { id: string }; response: any },
) => {
  let user = users.find((user: IUser) => user.id === params.id);

  if (!user) {
    response.status = 404;
    response.body = { message: `User not found. Id: ${params.id}` };
    return;
  }

  users = users.filter((user) => user.id !== params.id);
  response.body = user;
  response.status = 200;
};

export { getUsers, getUser, addUser, updateUser, deleteUser };
