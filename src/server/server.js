const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("../protos/echo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDefinition);
const echoPackage = grpcObject.echoPackage;

const server = new grpc.Server()

server.addService(echoPackage.EchoService.service, {
    echo: (call, callback) => {
        callback(null, {message: "echooooo"})
    } 
})

server.bind("localhost:8080", grpc.ServerCredentials.createInsecure())
server.start()