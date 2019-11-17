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
            double dHeight = 1;
            double dSide = 3;
            double dRadius = 4;
            Console.WriteLine($"Прямоугольник: ширина = {dWidth}, длина = {dHeight}");
            var rectangle = new Rectangle(dWidth, dHeight);
            Console.WriteLine($"Квадрат: сторона = {dSide}");
            var square = new Square(dSide);
            Console.WriteLine($"Круг: радиус = {dRadius}");
            var circle = new Circle(dRadius);

            Console.Read();
        }
    }
}
