using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lab2;
//using SparseMatrix;

namespace Lab3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "Алехин Сергей ИУ5-31Б";
            Console.OutputEncoding = Encoding.UTF8;

            Console.WriteLine("Начальные данные:");
            double dWidth = 6;
            double dHeight = 3;
            double dSide = 4;
            double dRadius = 5;
            Console.WriteLine($"Прямоугольник: ширина = {dWidth}, длина = {dHeight}");
            var rectangle = new Rectangle(dWidth, dHeight);
            Console.WriteLine($"Квадрат: сторона = {dSide}");
            var square = new Square(dSide);
            Console.WriteLine($"Круг: радиус = {dRadius}");
            var circle = new Circle(dRadius);
            Console.WriteLine();

            Console.WriteLine("ArrayList:");
            var geometricFiguresArrayList = new ArrayList
            {
                rectangle, square, circle
            };
            foreach (var currentGeometricFiguresArrayList in geometricFiguresArrayList)
            {
                Console.WriteLine(currentGeometricFiguresArrayList.ToString());
            }
            Console.WriteLine();

            Console.WriteLine("Sort List:");
            var geometricFiguresList = new List<GeometricFigure>
            {
                rectangle, square, circle
            };
            geometricFiguresList.Sort();
            foreach (var currentGeometricFiguresList in geometricFiguresList)
            {
                Console.WriteLine(currentGeometricFiguresList.ToString());
            }
            Console.WriteLine();

            Matrix<GeometricFigure> cube = new Matrix<GeometricFigure>(3, 3, 3, null);
            cube[1, 1, 1] = rectangle;
            cube[2, 2, 2] = square;
            cube[0, 0, 0] = circle;
            Console.WriteLine(cube.ToString());
            Console.WriteLine();

            Console.WriteLine("SimpleStack:");
            var geometricFiguresSimpleStack = new SimpleStack<GeometricFigure>();
            geometricFiguresSimpleStack.Push(rectangle);
            geometricFiguresSimpleStack.Push(square);
            geometricFiguresSimpleStack.Push(circle);
            while (geometricFiguresSimpleStack.Count > 0)
            {
                Console.WriteLine(geometricFiguresSimpleStack.Pop());
            }
            Console.WriteLine();

            Console.ReadKey();
        }
    }
}
