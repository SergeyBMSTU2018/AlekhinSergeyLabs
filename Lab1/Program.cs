using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "Алехин Сергей ИУ5-31Б";
            double dA, dB, dC;
            string sA = "", sB = "", sC = "";

            if ((args != null) && (args.Length > 0))
            {
                sA = args[0];
            }
            else
            {
                Console.Write("Введите число A = ");
                sA = Console.ReadLine();
            }
            while (!double.TryParse(sA, out dA))
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.Write("Некорректный ввод. Введите число A = ");
                sA = Console.ReadLine();
                Console.ForegroundColor = ConsoleColor.White;
            }

            if ((args != null) && (args.Length > 1))
            {
                sB = args[1];
            }
            else
            {
                Console.Write("Введите число B = ");
                sB = Console.ReadLine();
            }
            while (!double.TryParse(sB, out dB))
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.Write("Некорректный ввод. Введите число B = ");
                sB = Console.ReadLine();
                Console.ForegroundColor = ConsoleColor.White;
            }

            if ((args != null) && (args.Length > 2))
            {
                sC = args[2];
            }
            else
            {
                Console.Write("Введите число C = ");
                sC = Console.ReadLine();
            }
            while (!double.TryParse(sC, out dC))
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.Write("Некорректный ввод. Введите число C = ");
                sC = Console.ReadLine();
                Console.ForegroundColor = ConsoleColor.White;
            }

            Console.WriteLine($"A = {dA}, B = {dB}, C = {dC}");

            if ((dA == 0) && (dB == 0) && (dC == 0))
            {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("Корень уравнения: любое число");
            }

            if ((dA == 0) && (dB == 0) && (dC != 0))
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Нет решений");
            }

            if ((dA == 0) && (dB != 0))
            {
                double dX = -dC / dB;

                if (dX < 0)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Уравнение не имеет действительных корней");
                }
                else
                if (dX == 0)
                {
                    Console.ForegroundColor = ConsoleColor.Green;
                    Console.WriteLine("Корни уравнения:\nX1 = 0");
                }
                else
                {
                    Console.ForegroundColor = ConsoleColor.Green;
                    Console.WriteLine("Корни уравнения:");
                    Console.WriteLine($"X1 = {Math.Sqrt(dX)}");
                    Console.WriteLine($"X2 = -{Math.Sqrt(dX)}");
                }
            }

            if ((dA != 0))
            {
                double dD = dB * dB - 4 * dA * dC;
                if (dD < 0)
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Уравнение не имеет действительных корней");
                }
                else
                {
                    double dX1 = ((-1 * dB) - Math.Sqrt(dD)) / (2 * dA);
                    double dX2 = ((-1 * dB) + Math.Sqrt(dD)) / (2 * dA);

                    if ((dX1 < 0) && (dX2 < 0))
                    {
                        Console.ForegroundColor = ConsoleColor.Red;
                        Console.WriteLine("Уравнение не имеет действительных корней");
                    }
                    else
                    {
                        Console.ForegroundColor = ConsoleColor.Green;
                        Console.WriteLine("Корни уравнения:");

                        if (dX1 > 0)
                        {
                            double dX1_1 = Math.Sqrt(dX1);
                            double dX1_2 = -1 * dX1_1;
                            Console.Write($"{dX1_1} {dX1_2}");
                        }
                        else if (dX1 == 0)
                        {
                            Console.Write(dX1);
                        }

                        if ((dX2 > 0) && (dX1 != dX2))
                        {
                            double dX2_1 = Math.Sqrt(dX2);
                            double dX2_2 = -1 * dX2_1;
                            Console.Write($" {dX2_1} {dX2_2}");
                        }
                        else if ((dX2 == 0) && (dX1 != dX2))
                        {
                            Console.Write($" {dX2}");
                        }

                    }
                }
            }
            Console.Read();
        }
    }
}
