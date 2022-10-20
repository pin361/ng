using System;
using MongoDB.Bson;
using MongoDB.Driver;

namespace net_core_mongodb.helpers {
  public static class HelperUtils {
    public static void printArray<T>(
      string name,
      IFindFluent<T, T> items
    )
    {
      Console.WriteLine(name);
      items
        .ToList()
        .ForEach((item) => {
          Console.WriteLine(
            $"Collections: {item.ToJson()}"
          );
        });
    }

    public static void printItem<T>(
      string name,
      T item
    )
    {
      Console.WriteLine(name);
      Console.WriteLine($"Collections: {item.ToJson()}");
    }
  }
}
