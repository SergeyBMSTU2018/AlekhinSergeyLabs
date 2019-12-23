using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab6_part1
{
    delegate int Calc(string s, int i1, int i2, bool absolute);
    class Program
    {
        static int Mult(string str, int a, int b, bool absolute)
        {
            Console.Write(str);
            if (absolute) return Math.Abs(a * b);
            else return a * b;
        }

        static int Plus(string str, int a, int b, bool absolute)
        {
            Console.Write(str);
            if (absolute) return Math.Abs(a + b);
            else return a + b;
        }

        static void Print(int a, int b, bool ab, string str, Calc func)
        {
            Console.WriteLine("Параметры: a = " + a.ToString() + ", b = " + b.ToString());
            Console.WriteLine("\nРезультат:" + (func(str, a, b, ab)).ToString());
        }

        static void PrintAction(int a, int b, bool ab, string str, Action<string, int, int, bool> act_param)
        {
            Console.WriteLine("Параметры: a = " + a.ToString() + ", b = " + b.ToString());
            act_param(str, a, b, true);
        }

        static void Main(string[] args)
        {
            Console.Title = "Алехин Сергей ИУ5-31Б";
            int a = 5;
            int b = -2; 
            Print(a, b, true, "Умножение", Mult);
            Print(a, b, true, "Сложение", Plus);
            Print(a, b, false, "Вычитание",
                (str, x, y, absolute) =>
                {
                    Console.Write(str);
                    if (absolute) return Math.Abs(x - y);
                    else return x - y;
                }
                );

            Action<string, int, int, bool> act1 = (str, x, y, ab) =>
            {
                Console.Write(str);
                if (ab) Console.WriteLine(Math.Abs(x * y));
                else Console.WriteLine(x * y);
            };
            Action<string, int, int, bool> act2 = (str, x, y, ab) =>
            {
                Console.Write(str);
                if (ab) Console.WriteLine(Math.Abs(x + y));
                else Console.WriteLine(x + y);
            };
            PrintAction(a, b, true, "Умножение ", act1);
            PrintAction(a, b, true, "Сложение ", act2);
            Action<string, int, int, bool> act12 = act2 + act1;
            PrintAction(a, b, true, "Последовательные действия ", act12);
            Console.ReadKey();
        }
    }
}
