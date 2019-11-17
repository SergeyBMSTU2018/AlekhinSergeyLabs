using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "Алехин Сергей ИУ5-31Б";
            double dWidth = 2;
            double dHeight = 3;
            double dSide = 4;
            double dRadius = 5;
            Console.WriteLine($"Прямоугольник: ширина = {dWidth}, длина = {dHeight}");
            var rectangle = new Rectangle(dWidth, dHeight);
            Console.WriteLine($"{rectangle.ToString()}");
            Console.WriteLine($"Квадрат: сторона = {dSide}");
            var square = new Square(dSide);
            Console.WriteLine($"{square.ToString()}");
            Console.WriteLine($"Круг: радиус = {dRadius}");
            var circle = new Circle(dRadius);
            Console.WriteLine($"{circle.ToString()}");

            Console.Read();
        }
    }
}
