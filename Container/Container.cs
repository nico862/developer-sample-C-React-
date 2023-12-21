using System;
using System.Collections.Generic;

namespace DeveloperSample.Container
{
    public class Container
    {
        private readonly Dictionary<object, object> members;
        public Container()
        {
            members = new Dictionary<object, object>();
        }

        public void Bind(Type interfaceType, Type implementationType)
        {
            members[interfaceType] = implementationType;

        }
        public T Get<T>()
        {
            var result = members[typeof(T)];
            return (T)Activator.CreateInstance((Type)result);
        }
    }
}