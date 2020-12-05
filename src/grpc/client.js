import { DatabaseServiceClient } from "../protos/database_grpc_web_pb"
import { ResultType, Key, Version, Record, RecordInput, RecordResult, RecordUpdate } from "../protos/database_pb"

const client = new DatabaseServiceClient("http://localhost:9090", null, null)

function get(recordKey, callback){
    const key = new Key()
    key.setKey(recordKey)
    client.get(key, {}, callback)
}

function set(key, record, callback){
    const recordInput = new RecordInput()
    recordInput.setKey(key)
    recordInput.setRecord(record)
    client.set(recordInput, {}, callback)
}

function del(recordKey, callback){
    const key = new Key()
    key.setKey(recordKey)
    client.del(key, {}, callback)
}

function delVersion(recordKey, recordVersion, callback){
    const version = new Version()
    version.setKey(recordKey)
    version.setVersion(recordVersion)
    client.delVersion(version, {}, callback)
}

function createRecord(version, timestamp = new Date().getTime(), data){
    return {version, timestamp, data: JSON.stringify(data)}
}

export { client, get, set, del, delVersion, createRecord }