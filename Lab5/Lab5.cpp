#pragma once 
#include <iostream>
#include "Func.h"
#include <iomanip>
#include <cmath>

using namespace std;

int main()
{
	//setlocale(0, "RUSSIAN");
	TPF f[4] = { f1, f2, f3, f4 };
	I_print i_prn[4];
	int n = 0;
	double a = -1, b = 3;
	//cout << "Область интегрирования функций: " << a << " <= x <= " << b << endl;
	cout << "Function integration domain: " << a << " <= x <= " << b << endl;
	i_prn[0].name = "y=x"; i_prn[0].i_toch = (b * b - a * a) / 2.0;
	i_prn[1].name = "y=sin(22x)"; i_prn[1].i_toch = (cos(a * 22.0) - cos(b * 22.0)) / 22.0;
	i_prn[2].name = "y=x^4"; i_prn[2].i_toch = (b * b * b * b * b - a * a * a * a * a) / 5.0;
	i_prn[3].name = "y=arctg(x)"; i_prn[3].i_toch = b * atan(b) - a * atan(a) - (log(b * b + 1) - log(a * a + 1)) / 2.0;
	for (int j = 0; j < 2; j++)
	{
		switch (j)
		{
			//case 0: cout << "Метод прямоугольников" << endl; break;
			//case 1: cout << "Метод трапеций" << endl; break;
		case 0: cout << "Rectangle method" << endl; break;
		case 1: cout << "Trapezoid method" << endl; break;
		}
		for (double eps = 0.01; eps >= 0.000001; eps /= 10)
		{
			//cout << "Точность вычислений = " << fixed << setprecision(6) << eps << endl;
			cout << "Calculation accuracy = " << fixed << setprecision(6) << eps << endl;
			for (int i = 0; i < 4; i++)
			{
				switch (j)
				{
				case 0: i_prn[i].i_sum = IntRect(f[i], a, b, eps, n); break;
				case 1: i_prn[i].i_sum = IntTrap(f[i], a, b, eps, n); break;
				}
				i_prn[i].n = n;
			}
			PrintTabl(i_prn, 4);
		}
	}

	system("pause");
	return 0;
}
