# aws-node-water-sensor
Simple node.js AWS Lambda function to send alerts from the water sensor via Twilio.

## Notes
Currently this project uses environment variables for the Twilio configuration. In order to use, update these variables in the Terraform configuration for `aws_lambda_function`:

```hcl
  environment {
    variables = {
      FROM_PHONE   = "YOUR TWILIO SENDER NUMBER"
      TWILIO_SID   = "YOUR TWILIO SID"
      TWILIO_TOKEN = "YOUR TWILIO SECRET TOKEN"
    }
  }
```

## Future enhancements
* Utilize AWS Secrets Manager instead of environment variables

