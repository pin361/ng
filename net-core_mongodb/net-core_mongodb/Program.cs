using System;
using model;
using MongoDB.Bson;
using MongoDB.Driver;
using net_core_mongodb.helpers;

namespace net_core_mongodb {
  class Program {

    static readonly string ConnectionString = "mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb";

    static void Main(string[] args) {
      try {
        var client = new MongoClient(ConnectionString);
        var myCustomersDB = client.GetDatabase("mycustomers");

        myCustomersDB
          .ListCollectionNames()
          .ToList()
          .ForEach((name) =>
          {
            Console.WriteLine($"Collections: {name}");
          });

        var customersCollection = myCustomersDB
          .GetCollection<Customer>("customers");

        var customer = getCustomer(myCustomersDB, "John");
        var index = customer.Index;

        HelperUtils.printItem("customer", customer);

        var updateResult = customersCollection.UpdateMany(
          (c) => c.FirstName.Contains("John"),
          "{ $set: { index: " + (index + 1) + " } }"
        );

        customer = getCustomer(myCustomersDB, "John");

        HelperUtils.printItem("updatedCustomer", customer);

      } catch(Exception e) {
        Console.Write($"Error: {e.Message}");
      }
    }

    static Customer getCustomer(IMongoDatabase instance, string name) {
      var customersCollection = instance
        .GetCollection<Customer>("customers");

      return customersCollection
        .Find(c => c.FirstName.Contains(name))
        .FirstOrDefault();
    }
  }
}
