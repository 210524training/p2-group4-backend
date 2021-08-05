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
import dAsset from '@functions/delAsset';
import dLog from '@functions/delLog';
import dMemo from '@functions/delMemo';
import getUser from '@functions/getUser';
import aAsset from '@functions/addAsset';
import aLog from '@functions/addLog';
import aMemo from '@functions/addMemo';
import aTicket from '@functions/addTicket';
import aRegister from '@functions/addRegister';
import comment from '@functions/getComment';
import aComment from '@functions/addComment';
import addRegister from '@functions/putUser'

const serverlessConfiguration: AWS = {
  service: 'aws-lambda',
  frameworkVersion: '2',
  custom: {
    // webpack: {
    //   webpackConfig: './webpack.config.js',
    //   includeModules: {
    //     forceExclude: [
    //       'aws-sdk',
    //     ],
    //   },
    // },
    esbuild: { 
      bundle:true,
      minify: true,
      sourcemap: true,
      // keepNames:true,
      external : [
        'aws-sdk'
      ],
      watch: {
        pattern: ['src/**/*','db/**/*'],
        ignore: ['.serverless/**/*', 'lib', 'node_modules','.esbuild']
      }
    }
  },
  plugins: ['serverless-esbuild'],
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
  functions: {addRegister, aComment, comment, asset, ticket, log, memo, register, pAsset, pTicket, pLog, pRegister, pMemo, dMemo, dLog, dAsset, getUser, aAsset, aMemo, aTicket, aRegister, aLog},
  resources: {
    Resources: {
      dynamoQuery: {
        Type: 'AWS::IAM::Role',
        Properties: {
          RoleName: 'lambda-dynamodb-query-access',
          AssumeRolePolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Principal: {
                  Service: [
                    'lambda.amazonaws.com'
                  ]
                },
                Action: 'sts:AssumeRole'
              }
            ]
          },
          Policies: [
            {
              PolicyName: 'lambda-dynamodb-query-access',
              PolicyDocument: {
                Version: '2012-10-17',
                Statement: [
                  {
                    Effect: 'Allow',
                    Action: [
                      'logs:CreateLogGroup',
                      'logs:CreateLogStream',
                      'logs:PutLogEvents'
                    ],
                    Resource: [
                      {
                        'Fn::Join': [
                          ':',
                          [
                            'arn:aws:logs',
                            {
                              Ref: 'AWS::Region'
                            },
                            {
                              Ref: 'AWS::AccountId'
                            },
                            'log-group:/aws/lambda/*:*:*'
                          ]
                        ]
                      }
                    ]
                  },
                  {
                    Effect: 'Allow',
                    Action: [
                      'dynamodb:*',
                    ],
                    Resource: [
                      {
                        'Fn::Join': [
                          ':',
                          [
                            'arn:aws:dynamodb',
                            {
                              Ref: 'AWS::Region'
                            },
                            {
                              Ref: 'AWS::AccountId'
                            },
                            'table/training-210524-dynamo-example'
                          ]
                        ]
                      }
                    ]
                  },
                ]
              }
            }
          ]
        }
      }
    }
  }

};

module.exports = serverlessConfiguration;
