// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Email, Hash, Salt, S3Key } = initSchema(schema);

export {
  Email,
  Hash,
  Salt,
  S3Key
};