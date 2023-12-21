using System;

namespace DeveloperSample.ClassRefactoring
{
    public enum SwallowType
    {
        African, European
    }

    public enum SwallowLoad
    {
        None, Coconut
    }

    public class SwallowFactory
    {
        public Swallow GetSwallow(SwallowType swallowType) => new(swallowType);
    }

    public class Swallow
    {
        public SwallowType Type { get; }
        public SwallowLoad Load { get; private set; }

        public Swallow(SwallowType swallowType)
        {
            Type = swallowType;
        }

        public void ApplyLoad(SwallowLoad load)
        {
            Load = load;
        }

        public double GetAirSpeedVelocity()
        {
            return (Type, Load)
            switch
            {
                (SwallowType.African, SwallowLoad.None) => 22,
                (SwallowType.African, SwallowLoad.Coconut) => 18,
                (SwallowType.European, SwallowLoad.None) => 20,
                (SwallowType.European, SwallowLoad.Coconut) => (double)16,
                _ => throw new InvalidOperationException(),
            };
        }
    }
}