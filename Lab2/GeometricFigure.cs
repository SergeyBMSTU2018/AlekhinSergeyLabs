using System;

namespace Lab2
{
    public abstract class GeometricFigure : IComparable
    {
        public abstract string sFigureName { get; }
        public abstract double dSquare();

        public int CompareTo(object obj)
        {
            var thisFigure = (GeometricFigure)obj;
            if (this.dSquare() < thisFigure.dSquare()) return -1;
            if (this.dSquare() == thisFigure.dSquare()) return 0;
            return 1;
        }
    }
}
