import { Context, APIGatewayProxyResultV2, APIGatewayProxyEventV2 } from 'aws-lambda';
import { Twilio } from 'twilio';
import { AlertService } from './service/alerts';

const FROM_PHONE: string = process.env.FROM_PHONE;
const twilioClient = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const alertService = new AlertService(twilioClient);

export const handler = async (event: APIGatewayProxyEventV2, context: Context): Promise<APIGatewayProxyResultV2> => {
  console.log(`Event: ${JSON.stringify(event, null, 2)}`);
  console.log(`Context: ${JSON.stringify(context, null, 2)}`);
  return alertService.sendAlert(JSON.parse(event.body).toNumber, FROM_PHONE);
};
