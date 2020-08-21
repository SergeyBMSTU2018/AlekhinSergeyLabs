#pragma once

struct I_print {
	const char* name;
	double i_sum;
	double i_toch;
	int n;
};

typedef double(*TPF)(double);

void PrintTabl(I_print[], int);
double IntRect(TPF, double, double, double, int&);
double IntTrap(TPF, double, double, double, int&);
double f1(double);
double f2(double);
double f3(double);
double f4(double);