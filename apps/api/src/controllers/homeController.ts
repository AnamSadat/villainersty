import { Request, Response } from 'express';

class HomeController {
  constructor() {}

  static async getHello(req: Request, res: Response) {
    res.statusCode = 200;
    res.json({
      status: 'succes',
      code: 200,
      message: 'Get Hello!',
    });
  }

  static async getHome(req: Request, res: Response) {
    res.status(200).json({
      status: 'succes',
      code: 200,
      message: 'Halo dari route utama! 🌍',
    });
  }
}

export default HomeController;
