const grpc = require("grpc")
const protoLoader = require("@grpc/proto-loader")
const packageDef = protoLoader.loadSync("../protos/database.proto", {})
const grpcObj = grpc.loadPackageDefinition(packageDef)
const databasePackage = grpcObj.sd.nosql.prototype

const server = new grpc.Server()

server.addService(databasePackage.DatabaseService.service, {
    set: (call, callback) => {
        console.log("set")
        callback(null, {resultType: 0, record: { version: 1, timestamp: 0, data: "abc" }})
    },
    get: (call, callback) => {
        console.log("get")
        callback(null, {resultType: 0, record: { version: 1, timestamp: 0, data: "abc" }})
    },
    del: () => {console.log("del")},
    delVersion: () => {console.log("delVersion")},
    testAndSet: () => {console.log("get")}
})

server.bind("localhost:8080", grpc.ServerCredentials.createInsecure())
server.start()