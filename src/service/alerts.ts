import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { Twilio } from 'twilio';

export class AlertService {
  constructor(
    private twilio: Twilio
  ) {}

  sendAlert(toNumber: string, fromNumber: string): Promise<APIGatewayProxyResultV2> {
    if (toNumber && fromNumber) {
      return this.twilio.messages
        .create({
          from: fromNumber,
          to: toNumber,
          body: `Water detected at ${new Date().toLocaleTimeString('en-US', {timeZone: 'America/Chicago'})} Central time!`
        })
        .then (message => {
          console.log(`Successful message ID: ${message.sid}`);
          return {
            statusCode: 200,
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              status: 'OK'
            })
          };
        });
    } else {
      return Promise.resolve({
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: 'ERROR',
          message: 'Missing toNumber in request payload'
        })
      });
    }
  }
}
