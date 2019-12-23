namespace Lab6_part2
{
    class TestClass
    {
        public int a;
        public string b;
        public bool c;

        public TestClass() { }
        public TestClass(int x, string y, bool z) { a = x; b = y; c = z; }
        public TestClass(int x) { a = x; }
        public TestClass(int x, bool z) { a = x; c = z; }

        public int st (int x, bool z) 
        {
            if (z)
            {
                return x * x;
            }
            else
            {
                return x * x * x;
            }
        }

        int Aproperty1;
        [NewAttribute("Описание для property1")]
        public int property1
        {
            get { return Aproperty1; }
            set { Aproperty1 = value; }
        }

        [NewAttribute("Описание для property2")]
        public string property2 { get; private set; }
    }
}
