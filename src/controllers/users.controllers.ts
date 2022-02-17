import { Request, Response } from "express";
import { UsersServices } from "../services";

export class UsersControllers {
  static async CreateUser(req: Request, res: Response): Promise<Response> {
    const usersServices = new UsersServices();
    const user = await usersServices.CreateUser(req.body);
    return res.status(201).json(user);
  }

  static async LoginUser(req: Request, res: Response): Promise<Response> {
    const userService = new UsersServices();

    try {
      const token = await userService.Authenticate(req.body);
      return res.json({ token: token });
    } catch (e: any) {
      return res.status(e.statusCode).json({ message: e.message });
    }
  }

  static async GetUser (req: Request, res: Response): Promise<Response> {
    const { idUser } = req
    const usersServices = new UsersServices();
    const user = await usersServices.ById(idUser as string)
    return res.json(user)
  }

  static async DeleteUser (req: Request, res: Response): Promise<Response> {

    const { idUser } = req
    const userService = new UsersServices()
    const messageDeleted = await userService.Delete(idUser as string)

    if(messageDeleted){
      return res.json({message: messageDeleted})
    }

    return res.status(404).json({message: "user not exists"})
  }
}
