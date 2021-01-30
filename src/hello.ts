import { APIGatewayEvent } from "aws-lambda";

export const handler = async (event: APIGatewayEvent): Promise<any> => {
  const statusCode: number = 200;
  const body: string = "Hello world, people!";

  return { statusCode, body };
};