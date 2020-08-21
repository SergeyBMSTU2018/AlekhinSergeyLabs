#include <iostream>
#include "Func.h"
#include <iomanip>
#include <cmath>

using namespace std;

void PrintTabl(I_print i_prn[], int k)
{
	const int m = 4;
	int wn[m] = { 12,18,18,10 };
	char title[m][9] = { "Function","Integral","IntSum","N " };
	int size[m];
	for (int i = 0; i < m; i++)
		size[i] = strlen(title[i]);

	cout << char(218) << setfill(char(196));
	for (int j = 0; j < m - 1; j++)
		cout << setw(wn[j]) << char(194);
	cout << setw(wn[m - 1]) << char(191) << endl;

	cout << char(179);
	for (int j = 0; j < m; j++)
		cout << setw((wn[j] - size[j]) / 2) << setfill(' ') << ' ' << title[j]
		<< setw((wn[j] - size[j]) / 2) << char(179);
	cout << endl;
	for (int i = 0; i < k; i++)
	{
		cout << char(195) << fixed;
		for (int j = 0; j < m - 1; j++)
			cout << setfill(char(196)) << setw(wn[j]) << char(197);
		cout << setw(wn[m - 1]) << char(180) << setfill(' ') << endl;

		cout << char(179) << setw((wn[0] - strlen(i_prn[i].name)) / 2) << ' ' << i_prn[i].name
			<< setw((wn[0] - strlen(i_prn[i].name) + 1) / 2) << char(179);
		cout << setw(wn[1] - 1) << setprecision(10) << i_prn[i].i_toch << char(179)
			<< setw(wn[2] - 1) << i_prn[i].i_sum << setprecision(6) << char(179)
			<< setw(wn[3] - 1) << i_prn[i].n << char(179) << endl;
	}
	cout << char(192) << setfill(char(196));
	for (int j = 0; j < m - 1; j++)
		cout << setw(wn[j]) << char(193);
	cout << setw(wn[m - 1]) << char(217) << setfill(' ') << endl;
	cout << endl;
}

double f1(double x)
{
	return x;
}

double f2(double x)
{
	return sin(22 * x);
}

double f3(double x)
{
	return x * x * x * x;
}

double f4(double x)
{
	return atan(x);
}

double IntRect(TPF f, double a, double b, double eps, int& n)
{
	double dx = b - a, s0, s1;
	s1 = dx * f(a + dx / 2);
	s0 = 0;
	n = 1;
	while (abs(s1 - s0) > eps)
	{
		s0 = s1;
		dx /= 2;
		n *= 2;
		s1 = 0;
		for (int i = 1; i <= n; i++)
			s1 += f(a + dx / 2 + (i - 1) * dx);
		s1 *= dx;
	}
	return s1;
}

double IntTrap(TPF f, double a, double b, double eps, int& n)
{
	double dx = b - a, s0, s1;
	s1 = dx * (f(a) + f(b)) / 2;
	s0 = 0;
	n = 1;
	while (abs(s1 - s0) > eps)
	{
		s0 = s1;
		dx /= 2;
		n *= 2;
		s1 = 0;
		for (int i = 1; i <= n; i++)
			s1 += (f(a + (i - 1) * dx) + f(a + i * dx)) / 2;
		s1 *= dx;
	}
	return s1;
}