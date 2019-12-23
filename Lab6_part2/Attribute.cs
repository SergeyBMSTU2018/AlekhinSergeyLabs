using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab6_part2
{
    [AttributeUsage(AttributeTargets.Property, AllowMultiple = false, Inherited = false)]
    public class NewAttribute : Attribute
    {
        public string Description { get; set; }

        public NewAttribute() { }
        public NewAttribute(string y)
        {
            Description = y;
        }
    }
}
