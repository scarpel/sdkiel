/**
 * @fileoverview gRPC-Web generated client stub for echoPackage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.echoPackage = require('./echo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.echoPackage.EchoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.echoPackage.EchoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.echoPackage.EchoRequest,
 *   !proto.echoPackage.EchoResponse>}
 */
const methodDescriptor_EchoService_echo = new grpc.web.MethodDescriptor(
  '/echoPackage.EchoService/echo',
  grpc.web.MethodType.UNARY,
  proto.echoPackage.EchoRequest,
  proto.echoPackage.EchoResponse,
  /**
   * @param {!proto.echoPackage.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echoPackage.EchoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.echoPackage.EchoRequest,
 *   !proto.echoPackage.EchoResponse>}
 */
const methodInfo_EchoService_echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.echoPackage.EchoResponse,
  /**
   * @param {!proto.echoPackage.EchoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.echoPackage.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.echoPackage.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.echoPackage.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.echoPackage.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.echoPackage.EchoServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/echoPackage.EchoService/echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_echo,
      callback);
};


/**
 * @param {!proto.echoPackage.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.echoPackage.EchoResponse>}
 *     Promise that resolves to the response
 */
proto.echoPackage.EchoServicePromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/echoPackage.EchoService/echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_echo);
};


module.exports = proto.echoPackage;

