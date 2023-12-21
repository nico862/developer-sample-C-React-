using System.Text;

namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int Factorial(int n)
        {
            if (n == 0 || n == 1) return 1;
            return n * Factorial(n - 1);
        }

        public static string FormatSeparators(params string[] items)
        {
            var result = new StringBuilder();
            for (int i = 0; i < items.Length; i++)
            {
                result.Append(items[i]);

                if (i < items.Length - 2)
                    result.Append(", ");
                else if (i < items.Length - 1)
                    result.Append(" and ");

            }
                // downside of this method is that it uses linq heavy library, that's why it is not that efficient
                //  string res = string.Join(", ", items.Take(items.Length - 1)) + (items.Length <= 1 ? "" : " and ") + items.LastOrDefault();

            return result.ToString();
        }
    }
}