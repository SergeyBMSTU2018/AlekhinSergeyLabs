#include "Polynomial.h"
#include <iostream>
#include <string>

using namespace std;

int main()
{
	setlocale(0, "Russian");
	Polynom b;
	cin >> b;
	//cout << b << endl;
	Polynom c;
	cin >> c;
	//cout << c << endl;
	cout << "b=" << b << endl;
	cout << "c=" << c << endl;
	Polynom d;
	d = b;
	cout << "d = b = " << d << endl;
	d *= b;
	cout << "d *= b = " << d << endl;
	d = b * c;
	cout << "b * c = " << d << endl;
	d = b + c;
	cout << "b + c = " << d << endl;

	system("pause");
	return 0;
}