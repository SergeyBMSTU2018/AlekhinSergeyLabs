#include <iostream>
#include <cmath>
#include <iomanip>

using namespace std;

double f(int, double);
double fp(int, double);
void z1(int, double);
void z2(int, double);
void z3(int, double);

int main()
{
	double eps;
	int k;
	setlocale(0, "RUSSIAN");
	for (int i = 0; i < 3; i++)
	{
		switch (i)
		{
		case 0: k = 1; eps = 0.000001;
			cout << "k = " << k << endl << "eps = " << fixed << setprecision(6) << eps << endl;
			z1(k, eps); z2(k, eps); z3(k, eps);
			break;
		case 1: k = 1; eps = 0.00000001;
			cout << "k = " << k << endl << "eps = " << fixed << setprecision(8) << eps << endl;
			z1(k, eps); z2(k, eps); z3(k, eps);
			break;
		case 2: k = 10; eps = 0.000001;
			cout << "k = " << k << endl << "eps = " << fixed << setprecision(6) << eps << endl;
			z1(k, eps); z2(k, eps); z3(k, eps);
			break;
		}
	}

	system("pause");
	return 0;
}

double f(int k, double x)
{
	return x - k * cos(x);
}

double fp(int k, double x)
{
	return 1 + k * sin(x);
}

void z1(int k, double eps)
{
	int count = 0;
	double a = -5, b = 5, c;
	while (abs(a - b) > eps)
	{
		c = (a + b) / 2;
		if (f(k, a) * f(k, c) < 0) b = c;
		else a = c;
		count++;
	}
	cout << "Метод половинного деления " << fixed << setw(11) << setprecision(8) << c << ", итераций " << count << endl;
}

void z2(int k, double eps)
{
	int count = 0;
	double a = 3.1;
	while (abs(f(k, a)) > eps)
	{
		a = a - f(k, a) / fp(k, a);
		count++;
	}
	cout << "Метод Ньютона " << fixed << setw(23) << setprecision(8) << a << ", итераций " << count << endl;
}

void z3(int k, double eps)
{
	int count = 0;
	double a = 5;
	while (abs(f(k, a)) > eps)
	{
		a = k * cos(a);
		count++;
	}
	cout << "Метод простой итерации " << fixed << setw(14) << setprecision(8) << a << ", итераций " << count << endl;
}