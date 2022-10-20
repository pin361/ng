using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace model {
  public class Customer {
    [BsonId]
    public ObjectId Id;

    [BsonElement("first_name")]
    public string FirstName;

    [BsonElement("last_name")]
    public string LastName;

    [BsonElement("gender")]
    public int Gender;

    [BsonElement("index")]
    public int Index;
  }
}
