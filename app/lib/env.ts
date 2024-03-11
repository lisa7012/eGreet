import { cleanEnv, str } from 'envalid';

// Similar to zod where we are validating our environment variables
const env = cleanEnv(process.env, {
  PEXELS_API_KEY: str(),
});

export default env;
