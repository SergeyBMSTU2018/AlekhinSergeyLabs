namespace Lab2
{
    public class Square: Rectangle, IPrint
    {
        public double dSide { get; set; }

        public Square(double dSide = 0)
        {
            this.dSide = dSide;
        }

        public override string sFigureName => $"Квадрат";
        public override double dSquare() => dSide * dSide;
    }
}
