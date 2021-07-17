import type { AWS } from '@serverless/typescript';

import asset from '@functions/getAsset';
import memo from '@functions/getMemo';
import ticket from '@functions/getTicket';
import log from '@functions/getLog';
import register from '@functions/getRegister';
import pAsset from '@functions/patchAsset';
import pMemo from '@functions/patchMemo';
import pTicket from '@functions/patchTicket';
import pLog from '@functions/patchLog';
import pRegister from '@functions/patchRegister';
import hello from '@functions/hello';

const serverlessConfiguration: AWS = {
  service: 'aws-lambda',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: {
        forceExclude: [
          'aws-sdk',
        ],
      },
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    profile: 'vending-user',
    role: 'arn:aws:iam::226220841487:role/aws-lambda-dev-us-east-1-lambdaRole',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
  //   iamRoleStatements: [{
  //     Effect: 'Allow',
  //     Action: [
  //       "dynamodb:Query",
  //       'dynamodb:Scan',
  //       'dynamodb:GetItem',
  //       'dynamodb:PutItem',
  //     ],
  //     Resource: "arn:aws:dynamodb:us-east-2:226220841487:table/p2-stuff"
  //   }],
  },
  // import the function via paths
  functions: { asset, ticket, log, memo, register, pAsset, pTicket, pLog, pRegister, pMemo, hello },
};

module.exports = serverlessConfiguration;