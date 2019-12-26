```sh
pip3 install awscli aws-sam-cli
sam init
cd sam-app
sam build
sam local invoke "HelloWorldFunction" -e events/event.json
```

```sh
docker run -p 8000:8000 amazon/dynamodb-local
docker run -p 8083:8083 amazon/aws-stepfunctions-local
aws stepfunctions --endpoint http://localhost:8083 start-execution --state-machine arn:aws:states:us-east-1:123456789012:stateMachine:HelloWorld --name test
```

```sh
docker-compose up -d
sam local invoke "HelloWorldFunction" -e events/event.json --parameter-overrides ParameterKey=DynamoDbPermanentTableName,ParameterValue=permanent
```
