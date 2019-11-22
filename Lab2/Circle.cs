using System;

namespace Lab2
{
    public class Circle: GeometricFigure, IPrint
    {
        public double dRadius { get; set; }

        public Circle(double dRadius = 0)
        {
            this.dRadius = dRadius;
        }

        public override string sFigureName => $"Круг";
        public override double dSquare() => Math.PI * dRadius * dRadius;

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
