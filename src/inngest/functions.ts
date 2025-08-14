
import { inngest } from './client';

export const helloWorld = inngest.createFunction(
  { id: 'hello-world' },
  { event: 'test/hello.world' },
  async ({ event, step }) => {
    // This is a step - steps are retried automatically if they fail
    await step.sleep('wait-a-moment', '1s');
    
    return { 
      message: `Hello ${event.data.email ?? 'World'}!`,
      timestamp: new Date().toISOString()
    };
  },
);

export const processUserSignup = inngest.createFunction(
  { id: 'process-user-signup' },
  { event: 'user/signup' },
  async ({ event, step }) => {
    // Send welcome email
    const emailResult = await step.run('send-welcome-email', async () => {
      // Your email sending logic here
      console.log(`Sending welcome email to ${event.data.email}`);
      return { sent: true, to: event.data.email };
    });

    // Wait 1 day then send follow-up
    await step.sleep('wait-one-day', '1d');
    
    await step.run('send-followup-email', async () => {
      console.log(`Sending follow-up email to ${event.data.email}`);
      return { sent: true, type: 'follow-up' };
    });

    return { 
      message: 'User signup processed successfully',
      emailResult
    };
  },
);
