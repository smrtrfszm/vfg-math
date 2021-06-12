// source: shared.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.shared.Problem', null, global);
goog.exportSymbol('proto.shared.ProblemStream', null, global);
goog.exportSymbol('proto.shared.ProblemStream.Delete', null, global);
goog.exportSymbol('proto.shared.ProblemStream.Initial', null, global);
goog.exportSymbol('proto.shared.ProblemStream.Swap', null, global);
goog.exportSymbol('proto.shared.ProblemStream.Type', null, global);
goog.exportSymbol('proto.shared.ProblemStream.Update', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.shared.Problem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shared.Problem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shared.Problem.displayName = 'proto.shared.Problem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.shared.ProblemStream = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shared.ProblemStream, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shared.ProblemStream.displayName = 'proto.shared.ProblemStream';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.shared.ProblemStream.Initial = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shared.ProblemStream.Initial, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shared.ProblemStream.Initial.displayName = 'proto.shared.ProblemStream.Initial';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.shared.ProblemStream.Update = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shared.ProblemStream.Update, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shared.ProblemStream.Update.displayName = 'proto.shared.ProblemStream.Update';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.shared.ProblemStream.Delete = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shared.ProblemStream.Delete, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shared.ProblemStream.Delete.displayName = 'proto.shared.ProblemStream.Delete';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.shared.ProblemStream.Swap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.shared.ProblemStream.Swap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.shared.ProblemStream.Swap.displayName = 'proto.shared.ProblemStream.Swap';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.shared.Problem.prototype.toObject = function(opt_includeInstance) {
  return proto.shared.Problem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shared.Problem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.Problem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    body: jspb.Message.getFieldWithDefault(msg, 2, ""),
    image: jspb.Message.getFieldWithDefault(msg, 3, ""),
    solution: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.shared.Problem}
 */
proto.shared.Problem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shared.Problem;
  return proto.shared.Problem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shared.Problem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shared.Problem}
 */
proto.shared.Problem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSolution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.shared.Problem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shared.Problem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shared.Problem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.Problem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSolution();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.shared.Problem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.shared.Problem} returns this
 */
proto.shared.Problem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string body = 2;
 * @return {string}
 */
proto.shared.Problem.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.shared.Problem} returns this
 */
proto.shared.Problem.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string image = 3;
 * @return {string}
 */
proto.shared.Problem.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.shared.Problem} returns this
 */
proto.shared.Problem.prototype.setImage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 solution = 4;
 * @return {number}
 */
proto.shared.Problem.prototype.getSolution = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.shared.Problem} returns this
 */
proto.shared.Problem.prototype.setSolution = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.shared.ProblemStream.prototype.toObject = function(opt_includeInstance) {
  return proto.shared.ProblemStream.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shared.ProblemStream} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.ProblemStream.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    initial: (f = msg.getInitial()) && proto.shared.ProblemStream.Initial.toObject(includeInstance, f),
    update: (f = msg.getUpdate()) && proto.shared.ProblemStream.Update.toObject(includeInstance, f),
    pb_delete: (f = msg.getDelete()) && proto.shared.ProblemStream.Delete.toObject(includeInstance, f),
    swap: (f = msg.getSwap()) && proto.shared.ProblemStream.Swap.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.shared.ProblemStream}
 */
proto.shared.ProblemStream.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shared.ProblemStream;
  return proto.shared.ProblemStream.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shared.ProblemStream} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shared.ProblemStream}
 */
proto.shared.ProblemStream.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.shared.ProblemStream.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.shared.ProblemStream.Initial;
      reader.readMessage(value,proto.shared.ProblemStream.Initial.deserializeBinaryFromReader);
      msg.setInitial(value);
      break;
    case 3:
      var value = new proto.shared.ProblemStream.Update;
      reader.readMessage(value,proto.shared.ProblemStream.Update.deserializeBinaryFromReader);
      msg.setUpdate(value);
      break;
    case 4:
      var value = new proto.shared.ProblemStream.Delete;
      reader.readMessage(value,proto.shared.ProblemStream.Delete.deserializeBinaryFromReader);
      msg.setDelete(value);
      break;
    case 5:
      var value = new proto.shared.ProblemStream.Swap;
      reader.readMessage(value,proto.shared.ProblemStream.Swap.deserializeBinaryFromReader);
      msg.setSwap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.shared.ProblemStream.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shared.ProblemStream.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shared.ProblemStream} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.ProblemStream.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getInitial();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.shared.ProblemStream.Initial.serializeBinaryToWriter
    );
  }
  f = message.getUpdate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.shared.ProblemStream.Update.serializeBinaryToWriter
    );
  }
  f = message.getDelete();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.shared.ProblemStream.Delete.serializeBinaryToWriter
    );
  }
  f = message.getSwap();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.shared.ProblemStream.Swap.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.shared.ProblemStream.Type = {
  K_INITIAL: 0,
  K_UPDATE: 1,
  K_DELETE: 2,
  K_SWAP: 3
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.shared.ProblemStream.Initial.prototype.toObject = function(opt_includeInstance) {
  return proto.shared.ProblemStream.Initial.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shared.ProblemStream.Initial} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.ProblemStream.Initial.toObject = function(includeInstance, msg) {
  var f, obj = {
    problem: (f = msg.getProblem()) && proto.shared.Problem.toObject(includeInstance, f),
    at: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.shared.ProblemStream.Initial}
 */
proto.shared.ProblemStream.Initial.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shared.ProblemStream.Initial;
  return proto.shared.ProblemStream.Initial.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shared.ProblemStream.Initial} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shared.ProblemStream.Initial}
 */
proto.shared.ProblemStream.Initial.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.shared.Problem;
      reader.readMessage(value,proto.shared.Problem.deserializeBinaryFromReader);
      msg.setProblem(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.shared.ProblemStream.Initial.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shared.ProblemStream.Initial.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shared.ProblemStream.Initial} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.ProblemStream.Initial.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProblem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.shared.Problem.serializeBinaryToWriter
    );
  }
  f = message.getAt();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional Problem problem = 1;
 * @return {?proto.shared.Problem}
 */
proto.shared.ProblemStream.Initial.prototype.getProblem = function() {
  return /** @type{?proto.shared.Problem} */ (
    jspb.Message.getWrapperField(this, proto.shared.Problem, 1));
};


/**
 * @param {?proto.shared.Problem|undefined} value
 * @return {!proto.shared.ProblemStream.Initial} returns this
*/
proto.shared.ProblemStream.Initial.prototype.setProblem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shared.ProblemStream.Initial} returns this
 */
proto.shared.ProblemStream.Initial.prototype.clearProblem = function() {
  return this.setProblem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shared.ProblemStream.Initial.prototype.hasProblem = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 at = 2;
 * @return {number}
 */
proto.shared.ProblemStream.Initial.prototype.getAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.shared.ProblemStream.Initial} returns this
 */
proto.shared.ProblemStream.Initial.prototype.setAt = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.shared.ProblemStream.Update.prototype.toObject = function(opt_includeInstance) {
  return proto.shared.ProblemStream.Update.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shared.ProblemStream.Update} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.ProblemStream.Update.toObject = function(includeInstance, msg) {
  var f, obj = {
    problem: (f = msg.getProblem()) && proto.shared.Problem.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.shared.ProblemStream.Update}
 */
proto.shared.ProblemStream.Update.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shared.ProblemStream.Update;
  return proto.shared.ProblemStream.Update.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shared.ProblemStream.Update} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shared.ProblemStream.Update}
 */
proto.shared.ProblemStream.Update.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.shared.Problem;
      reader.readMessage(value,proto.shared.Problem.deserializeBinaryFromReader);
      msg.setProblem(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.shared.ProblemStream.Update.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shared.ProblemStream.Update.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shared.ProblemStream.Update} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.ProblemStream.Update.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProblem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.shared.Problem.serializeBinaryToWriter
    );
  }
};


/**
 * optional Problem problem = 1;
 * @return {?proto.shared.Problem}
 */
proto.shared.ProblemStream.Update.prototype.getProblem = function() {
  return /** @type{?proto.shared.Problem} */ (
    jspb.Message.getWrapperField(this, proto.shared.Problem, 1));
};


/**
 * @param {?proto.shared.Problem|undefined} value
 * @return {!proto.shared.ProblemStream.Update} returns this
*/
proto.shared.ProblemStream.Update.prototype.setProblem = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shared.ProblemStream.Update} returns this
 */
proto.shared.ProblemStream.Update.prototype.clearProblem = function() {
  return this.setProblem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shared.ProblemStream.Update.prototype.hasProblem = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.shared.ProblemStream.Delete.prototype.toObject = function(opt_includeInstance) {
  return proto.shared.ProblemStream.Delete.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shared.ProblemStream.Delete} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.ProblemStream.Delete.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.shared.ProblemStream.Delete}
 */
proto.shared.ProblemStream.Delete.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shared.ProblemStream.Delete;
  return proto.shared.ProblemStream.Delete.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shared.ProblemStream.Delete} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shared.ProblemStream.Delete}
 */
proto.shared.ProblemStream.Delete.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.shared.ProblemStream.Delete.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shared.ProblemStream.Delete.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shared.ProblemStream.Delete} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.ProblemStream.Delete.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.shared.ProblemStream.Delete.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.shared.ProblemStream.Delete} returns this
 */
proto.shared.ProblemStream.Delete.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.shared.ProblemStream.Swap.prototype.toObject = function(opt_includeInstance) {
  return proto.shared.ProblemStream.Swap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.shared.ProblemStream.Swap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.ProblemStream.Swap.toObject = function(includeInstance, msg) {
  var f, obj = {
    a: jspb.Message.getFieldWithDefault(msg, 1, ""),
    b: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.shared.ProblemStream.Swap}
 */
proto.shared.ProblemStream.Swap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.shared.ProblemStream.Swap;
  return proto.shared.ProblemStream.Swap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.shared.ProblemStream.Swap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.shared.ProblemStream.Swap}
 */
proto.shared.ProblemStream.Swap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setA(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setB(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.shared.ProblemStream.Swap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.shared.ProblemStream.Swap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.shared.ProblemStream.Swap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.shared.ProblemStream.Swap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getA();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getB();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string a = 1;
 * @return {string}
 */
proto.shared.ProblemStream.Swap.prototype.getA = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.shared.ProblemStream.Swap} returns this
 */
proto.shared.ProblemStream.Swap.prototype.setA = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string b = 2;
 * @return {string}
 */
proto.shared.ProblemStream.Swap.prototype.getB = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.shared.ProblemStream.Swap} returns this
 */
proto.shared.ProblemStream.Swap.prototype.setB = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Type type = 1;
 * @return {!proto.shared.ProblemStream.Type}
 */
proto.shared.ProblemStream.prototype.getType = function() {
  return /** @type {!proto.shared.ProblemStream.Type} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.shared.ProblemStream.Type} value
 * @return {!proto.shared.ProblemStream} returns this
 */
proto.shared.ProblemStream.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional Initial initial = 2;
 * @return {?proto.shared.ProblemStream.Initial}
 */
proto.shared.ProblemStream.prototype.getInitial = function() {
  return /** @type{?proto.shared.ProblemStream.Initial} */ (
    jspb.Message.getWrapperField(this, proto.shared.ProblemStream.Initial, 2));
};


/**
 * @param {?proto.shared.ProblemStream.Initial|undefined} value
 * @return {!proto.shared.ProblemStream} returns this
*/
proto.shared.ProblemStream.prototype.setInitial = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shared.ProblemStream} returns this
 */
proto.shared.ProblemStream.prototype.clearInitial = function() {
  return this.setInitial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shared.ProblemStream.prototype.hasInitial = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Update update = 3;
 * @return {?proto.shared.ProblemStream.Update}
 */
proto.shared.ProblemStream.prototype.getUpdate = function() {
  return /** @type{?proto.shared.ProblemStream.Update} */ (
    jspb.Message.getWrapperField(this, proto.shared.ProblemStream.Update, 3));
};


/**
 * @param {?proto.shared.ProblemStream.Update|undefined} value
 * @return {!proto.shared.ProblemStream} returns this
*/
proto.shared.ProblemStream.prototype.setUpdate = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shared.ProblemStream} returns this
 */
proto.shared.ProblemStream.prototype.clearUpdate = function() {
  return this.setUpdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shared.ProblemStream.prototype.hasUpdate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Delete delete = 4;
 * @return {?proto.shared.ProblemStream.Delete}
 */
proto.shared.ProblemStream.prototype.getDelete = function() {
  return /** @type{?proto.shared.ProblemStream.Delete} */ (
    jspb.Message.getWrapperField(this, proto.shared.ProblemStream.Delete, 4));
};


/**
 * @param {?proto.shared.ProblemStream.Delete|undefined} value
 * @return {!proto.shared.ProblemStream} returns this
*/
proto.shared.ProblemStream.prototype.setDelete = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shared.ProblemStream} returns this
 */
proto.shared.ProblemStream.prototype.clearDelete = function() {
  return this.setDelete(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shared.ProblemStream.prototype.hasDelete = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Swap swap = 5;
 * @return {?proto.shared.ProblemStream.Swap}
 */
proto.shared.ProblemStream.prototype.getSwap = function() {
  return /** @type{?proto.shared.ProblemStream.Swap} */ (
    jspb.Message.getWrapperField(this, proto.shared.ProblemStream.Swap, 5));
};


/**
 * @param {?proto.shared.ProblemStream.Swap|undefined} value
 * @return {!proto.shared.ProblemStream} returns this
*/
proto.shared.ProblemStream.prototype.setSwap = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.shared.ProblemStream} returns this
 */
proto.shared.ProblemStream.prototype.clearSwap = function() {
  return this.setSwap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.shared.ProblemStream.prototype.hasSwap = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.shared);
