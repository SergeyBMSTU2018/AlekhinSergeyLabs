using System;
using System.Collections.Generic;
using System.Text;

namespace Lab2
{
    public class Rectangle : GeometricFigure, IPrint
    {
        public double dWidth { get; set; }
        public double dHeight { get; set; }

        public Rectangle(double dWidth = 0, double dHeight = 0)
        {
            this.dWidth = dWidth;
            this.dHeight = dHeight;
        }

        public override string sFigureName => $"Прямоугольник";
        public override double dSquare() => dHeight * dWidth;

        public override string ToString()
        {
            return $"Площадь {this.sFigureName} = {this.dSquare()}";
        }

        public void Print()
        {
            Console.WriteLine(ToString());
        }
    }
}
